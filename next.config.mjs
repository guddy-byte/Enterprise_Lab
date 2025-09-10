/** @type {import('next').NextConfig} */
const nextConfig = {
  // GitHub Pages needs these
  basePath: '/Enterprise_Lab',
  assetPrefix: '/Enterprise_Lab',
  output: 'export',

  // Fix Image Optimization error
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
