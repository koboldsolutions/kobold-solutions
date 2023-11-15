const path = require("path");

const nextConfig = {
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, "css")],
  },
  trailingSlash: true,
  devIndicators: {
    buildActivity: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  }
  
}

module.exports = nextConfig



const nextConfig = {
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname,
 
"css")],
  },
  trailingSlash: true,
  devIndicators: {
    buildActivity: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  assetPrefix: '/kobold-solutions/',
  publicRuntimeConfig: {
    assetsPrefix: '/assets/',
  },
  staticAssets: ['/assets/', '/dark/'],
};

module.exports = nextConfig;