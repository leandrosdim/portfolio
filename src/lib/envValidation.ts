// Environment variable validation utility

interface EnvVariables {
  NEXT_PUBLIC_SUPABASE_URL: string;
  SUPABASE_SERVICE_ROLE_KEY: string;
  RESEND_API_KEY: string;
  CONTACT_EMAIL_FROM: string;
  CONTACT_EMAIL_TO: string;
}

export function validateEnvironmentVariables(): { isValid: boolean; missingVars: string[] } {
  const requiredEnvVars: (keyof EnvVariables)[] = [
    'NEXT_PUBLIC_SUPABASE_URL',
    'SUPABASE_SERVICE_ROLE_KEY',
    'RESEND_API_KEY',
    'CONTACT_EMAIL_FROM',
    'CONTACT_EMAIL_TO'
  ];
  
  const missingVars: string[] = [];
  
  for (const varName of requiredEnvVars) {
    if (!process.env[varName]) {
      missingVars.push(varName);
    }
  }
  
  return {
    isValid: missingVars.length === 0,
    missingVars
  };
}

// Check if we're in development mode
export function isDevelopment(): boolean {
  return process.env.NODE_ENV === 'development';
}

// Check if we're in production mode
export function isProduction(): boolean {
  return process.env.NODE_ENV === 'production';
}