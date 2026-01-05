'use server';

import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';
import { ContactMessage } from '@/lib/supabase';

// Initialize Supabase client for server-side operations
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseServiceKey);

// Initialize Resend client
const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(formData: FormData) {
  try {
    // Extract form data
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;
    const honeypot = formData.get('website') as string; // Honeypot field
    
    // Spam protection - check honeypot field
    if (honeypot) {
      return { success: false, error: 'Spam detected' };
    }
    
    // Validate required fields
    if (!name || !email || !subject || !message) {
      return { success: false, error: 'All fields are required' };
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return { success: false, error: 'Invalid email format' };
    }
    
    // Store message in Supabase
    const { data, error } = await supabase
      .from('contact_messages')
      .insert([
        {
          name,
          email,
          subject,
          message,
        }
      ])
      .select();
      
    if (error) {
      console.error('Supabase error:', error);
      return { success: false, error: 'Failed to store message' };
    }
    
    // Send email notification using Resend
    const { data: emailData, error: emailError } = await resend.emails.send({
      from: process.env.CONTACT_EMAIL_FROM || 'contact@yourdomain.com',
      to: process.env.CONTACT_EMAIL_TO || 'you@yourdomain.com',
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });
    
    if (emailError) {
      console.error('Resend error:', emailError);
      // Don't fail the entire operation if email fails, just log it
    }
    
    return { success: true, data };
  } catch (error) {
    console.error('Unexpected error:', error);
    return { success: false, error: 'An unexpected error occurred' };
  }
}