// Simple security utilities for contact form validation and sanitization

// Basic email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Simple sanitization to prevent XSS
export function sanitizeInput(input: string): string {
  if (!input) return '';
  
  return input
    .trim()
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

// Validate and sanitize email addresses
export function validateAndSanitizeEmail(email: string): string | null {
  const trimmedEmail = email.trim();
  if (EMAIL_REGEX.test(trimmedEmail)) {
    // Basic sanitization - lowercase and trim
    return trimmedEmail.toLowerCase();
  }
  return null;
}

// Validate subject line
export function validateSubject(subject: string): boolean {
  const trimmedSubject = subject.trim();
  // Subject should not be too long and should not contain line breaks
  return trimmedSubject.length > 0 && trimmedSubject.length <= 200 && !/[\n\r]/.test(trimmedSubject);
}

// Validate message content length
export function validateMessage(message: string): boolean {
  const trimmedMessage = message.trim();
  return trimmedMessage.length > 0 && trimmedMessage.length <= 2000;
}

// Comprehensive validation for all contact form fields
export function validateContactForm(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];
  
  // Validate name
  const trimmedName = data.name?.trim() || '';
  if (!trimmedName) {
    errors.push('Name is required');
  } else if (trimmedName.length > 100) {
    errors.push('Name is too long');
  }
  
  // Validate email
  if (!data.email || !validateAndSanitizeEmail(data.email)) {
    errors.push('Valid email is required');
  }
  
  // Validate subject
  if (!validateSubject(data.subject)) {
    errors.push('Valid subject is required (max 200 characters, no line breaks)');
  }
  
  // Validate message
  if (!validateMessage(data.message)) {
    errors.push('Message is required (max 2000 characters)');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
}

// Sanitize all form data
export function sanitizeFormData(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): {
  name: string;
  email: string;
  subject: string;
  message: string;
} {
  return {
    name: sanitizeInput(data.name),
    email: data.email, // Email is already validated/sanitized separately
    subject: sanitizeInput(data.subject),
    message: sanitizeInput(data.message)
  };
}