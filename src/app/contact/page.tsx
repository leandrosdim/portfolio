"use client";

import { useState } from "react";
import { profile } from "@/content/profile";
import { submitContactForm } from "./actions/submitContactForm";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    // Client-side validation before sending to server
    if (!formData.name.trim()) {
      setSubmitError("Name is required");
      setIsSubmitting(false);
      return;
    }
    
    if (formData.name.trim().length > 100) {
      setSubmitError("Name is too long (max 100 characters)");
      setIsSubmitting(false);
      return;
    }
    
    // Basic email validation on client side
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      setSubmitError("Valid email is required");
      setIsSubmitting(false);
      return;
    }
    
    if (!formData.subject.trim()) {
      setSubmitError("Subject is required");
      setIsSubmitting(false);
      return;
    }
    
    if (formData.subject.trim().length > 200) {
      setSubmitError("Subject is too long (max 200 characters)");
      setIsSubmitting(false);
      return;
    }
    
    if (/\n|\r/.test(formData.subject)) {
      setSubmitError("Subject cannot contain line breaks");
      setIsSubmitting(false);
      return;
    }
    
    if (!formData.message.trim()) {
      setSubmitError("Message is required");
      setIsSubmitting(false);
      return;
    }
    
    if (formData.message.trim().length > 2000) {
      setSubmitError("Message is too long (max 2000 characters)");
      setIsSubmitting(false);
      return;
    }

    try {
      // Create FormData object
      const formDataObj = new FormData();
      formDataObj.append("name", formData.name);
      formDataObj.append("email", formData.email);
      formDataObj.append("subject", formData.subject);
      formDataObj.append("message", formData.message);
      // Honeypot field - should be empty
      formDataObj.append("website", "");

      const result = await submitContactForm(formDataObj);
      
      if (result.success) {
        setSubmitSuccess(true);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      } else {
        setSubmitError(result.error || "Failed to send message");
      }
    } catch (error) {
      setSubmitError("An unexpected error occurred");
      // We catch the error above but still need to reference it to satisfy eslint
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Contact</h1>
      <p className="text-lg mb-8 text-gray-600 dark:text-slate-300">Get in touch with me</p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Send me a message</h2>
          
          {submitSuccess ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                <p>Thank you for your message! I&apos;ll get back to you soon.</p>
              </div>
          ) : null}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Honeypot field - hidden from users but visible to bots */}
            <div className="hidden">
              <label htmlFor="website">Website</label>
              <input
                type="text"
                id="website"
                name="website"
                className="hidden"
              />
            </div>
            
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="What&apos;s this regarding?"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your message here..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
            
            {submitError && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                <p>{submitError}</p>
              </div>
            )}
          </form>
        </div>
        
        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Get in touch</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Email</h3>
              <a 
                href={`mailto:${profile.email}`} 
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                {profile.email}
              </a>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Location</h3>
              <p>{profile.location}</p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Follow me</h3>
              <div className="flex flex-wrap gap-4">
                {profile.socialLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.url} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center"
                  >
                    {link.name}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-100 dark:bg-slate-800 rounded-lg p-6">
              <h3 className="text-lg font-medium mb-2">Response Time</h3>
              <p className="text-gray-600 dark:text-slate-300">
                I usually respond to emails within 24-48 hours. For urgent matters, 
                please mention it in the subject line.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}