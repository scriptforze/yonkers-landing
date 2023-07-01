/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
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
