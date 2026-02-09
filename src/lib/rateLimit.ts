// Simple in-memory rate limiter for contact form submissions

class MemoryRateLimiter {
  private requests: Map<string, { count: number; resetTime: number }> = new Map();

  isRateLimited(identifier: string, maxRequests: number = 5, windowMs: number = 60 * 60 * 1000): boolean {
    const now = Date.now();
    const key = `contact_${identifier}`;
    const requestData = this.requests.get(key) || { count: 0, resetTime: now + windowMs };

    // Reset counter if window has passed
    if (now > requestData.resetTime) {
      requestData.count = 0;
      requestData.resetTime = now + windowMs;
    }

    // Increment request count
    requestData.count++;

    // Update map
    this.requests.set(key, requestData);

    // Return true if rate limited
    return requestData.count > maxRequests;
  }
  
  // Method to get real client IP in production
  getRealIP(_request: Request): string {
    // In a real implementation, you would extract the IP from headers like:
    // x-forwarded-for, x-real-ip, etc.
    // For now, we'll use a placeholder
    return 'unknown';
  }
}

// Export memory-based rate limiter
export const memoryRateLimit = new MemoryRateLimiter();