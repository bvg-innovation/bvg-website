// next.config.js
/***/
const nextConfig = {
  output: "export",
  images: {
    // If you are using the Image component, you might need to configure this
    unoptimized: true,
  },
  // Optionally, configure basePath and assetPrefix if your site is not hosted at the root of your domain
  // basePath: '',
  // assetPrefix: '',
};

module.exports = nextConfig;

/*@type {import('next').NextConfig
const nextConfig = {};

export default nextConfig;
*/
