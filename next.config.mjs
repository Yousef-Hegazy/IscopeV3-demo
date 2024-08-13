/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["ar-SA", "en-US"],
    defaultLocale: "ar-SA",
    localeDetection: false,
  },
  images: {
    remotePatterns: [
      {
        hostname: "encrypted-tbn0.gstatic.com",
      },
    ],
  },
  experimental: {
    typedRoutes: true,
  },
};

export default nextConfig;
