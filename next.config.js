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
    domains: ["localhost"],
  },
  env: {
    BASE_URL_API: process.env.BASE_URL_API,
    PHONE_NUMBER_WSP: process.env.PHONE_NUMBER_WSP,
  },
};

module.exports = nextConfig;
