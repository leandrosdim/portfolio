import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    minimumCacheTTL: 60,
    formats: ['image/avif', 'image/webp'],
    qualities: [75, 90], // Add 90 to the allowed quality values
  },
};

export default nextConfig;
