/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "xhmmmrnmnncvntnovvox.supabase.co",
        pathname: "/storage/**",
      },
    ],
  },
};

module.exports = nextConfig;
