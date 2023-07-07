/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.pexels.com", "github.com", "raw.githubusercontent.com"],
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
