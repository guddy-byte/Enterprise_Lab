/** @type {import('next').NextConfig} */
const nextConfig = {
  // 👇 add this so Next.js knows your repo folder on GitHub Pages
  basePath: '/Enterprise_Lab',
  assetPrefix: '/Enterprise_Lab/',

  // 👇 needed if you’re doing next export
  output: 'export',
};

export default nextConfig;