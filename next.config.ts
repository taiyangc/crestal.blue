import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Only use basePath for GitHub Pages subdirectory, not custom domain
  basePath: process.env.GITHUB_PAGES && !process.env.CUSTOM_DOMAIN ? '/crestal.blue' : '',
  assetPrefix: process.env.GITHUB_PAGES && !process.env.CUSTOM_DOMAIN ? '/crestal.blue/' : '',
};

export default nextConfig;
