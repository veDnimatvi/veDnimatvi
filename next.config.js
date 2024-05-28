/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["www.monterail.com"],
    // domains: ["localhost"],
  },
  i18n: {
    locales: ["vi"],
    defaultLocale: "vi",
  },
};

module.exports = nextConfig;
