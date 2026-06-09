// Simple in-memory rate limiter for contact form submissions

class MemoryRateLimiter {
  private requests: Map<string, { count: number; resetTime: number }> = new Map();

  isRateLimited(identifier: string, maxRequests: number = 5, windowMs: number = 60 * 60 * 1000): boolean {
    const now = Date.now();
    const key = `contact_${identifier}`;
    const requestData = this.requests.get(key) || { count: 0, resetTime: now + windowMs };

    if (now > requestData.resetTime) {
      requestData.count = 0;
      requestData.resetTime = now + windowMs;
    }

    requestData.count++;
    this.requests.set(key, requestData);

    return requestData.count > maxRequests;
  }

  getClientIP(headers: Headers): string {
    const forwarded = headers.get("x-forwarded-for");
    if (forwarded) {
      return forwarded.split(",")[0].trim();
    }
    const realIP = headers.get("x-real-ip");
    if (realIP) {
      return realIP.trim();
    }
    return "unknown";
  }
}

// Export memory-based rate limiter
export const memoryRateLimit = new MemoryRateLimiter();