/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["ar", "en"],
    defaultLocale: "ar",
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
