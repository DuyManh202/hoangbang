/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, { dev }) {
    // Avoid intermittent Webpack cache allocation failures during local development.
    if (dev) config.cache = false;
    return config;
  },
};

export default nextConfig;
