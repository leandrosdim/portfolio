'use server';

import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';
import { validateContactForm, sanitizeFormData, validateAndSanitizeEmail } from '@/lib/security';
import { memoryRateLimit } from '@/lib/rateLimit';
import { validateEnvironmentVariables } from '@/lib/envValidation';

// Initialize Supabase client for server-side operations
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseServiceKey);

// Initialize Resend client
const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(formData: FormData) {
  try {
    // Validate environment variables
    const envValidation = validateEnvironmentVariables();
    if (!envValidation.isValid) {
      console.error('Missing environment variables:', envValidation.missingVars);
      return { success: false, error: 'Service is not properly configured. Please contact the administrator.' };
    }
    
    // Get IP address for rate limiting (in production, you might want to get the real IP)
    const ip = 'unknown';
    
    // Rate limiting - prevent spam
    if (memoryRateLimit.isRateLimited(ip)) {
      return { success: false, error: 'Too many requests. Please try again later.' };
    }
    
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
    
    // Package form data for validation
    const formDataObject = {
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim()
    };
    
    // Validate the form data
    const validation = validateContactForm(formDataObject);
    if (!validation.isValid) {
      return { success: false, error: validation.errors.join(', ') };
    }
    
    // Sanitize form data to prevent XSS attacks
    const sanitizedData = sanitizeFormData(formDataObject);
    
    // Validate and sanitize email separately
    const sanitizedEmail = validateAndSanitizeEmail(email);
    if (!sanitizedEmail) {
      return { success: false, error: 'Invalid email format' };
    }
    
    // Prepare data for storage with sanitized values
    const dataToStore = {
      name: sanitizedData.name,
      email: sanitizedEmail,
      subject: sanitizedData.subject,
      message: sanitizedData.message,
    };
    
    // Store message in Supabase
    const { data, error } = await supabase
      .from('contact_messages')
      .insert([dataToStore])
      .select();
      
    if (error) {
      console.error('Supabase error:', error);
      return { success: false, error: 'Failed to store message' };
    }
    
    // Send email notification using Resend with sanitized data
    const emailResult = await resend.emails.send({
      from: process.env.CONTACT_EMAIL_FROM || 'contact@yourdomain.com',
      to: process.env.CONTACT_EMAIL_TO || 'you@yourdomain.com',
      subject: `New Contact Form Submission: ${sanitizedData.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${sanitizedData.name}</p>
        <p><strong>Email:</strong> ${sanitizedEmail}</p>
        <p><strong>Subject:</strong> ${sanitizedData.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${sanitizedData.message.replace(/\n/g, '<br>')}</p>
      `,
    });
    
    if (emailResult.error) {
      console.error('Resend error:', emailResult.error);
      // Don't fail the entire operation if email fails, just log it
    }
    
    return { success: true, data };
  } catch (error) {
    console.error('Unexpected error:', error);
    return { success: false, error: 'An unexpected error occurred' };
  }
}