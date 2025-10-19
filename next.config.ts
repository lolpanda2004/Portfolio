import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ✅ Prevent ESLint errors from breaking Vercel builds
  eslint: {
    ignoreDuringBuilds: true,
  },

  // (Optional) You can add other configs below later
  // experimental: { turbo: true },
  // images: { domains: ["example.com"] },
};

export default nextConfig;
