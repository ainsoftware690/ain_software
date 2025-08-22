import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.unsplash.com"],
  },
  eslint: {
    // ✅ This will allow deployment even if ESLint finds errors/warnings
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
