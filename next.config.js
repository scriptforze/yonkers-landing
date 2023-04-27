/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: {
      ssr: true,
      displayName: true,
    },
  },
  images: {
    unoptimized: true,
  },
  env: {
    BASE_URL_API: process.env.BASE_URL_API,
  },
};

module.exports = nextConfig;
