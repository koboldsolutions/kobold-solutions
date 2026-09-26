const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: false,

  sassOptions: {
    includePaths: [path.join(__dirname, 'css')],
  },

  basePath: '',
  assetPrefix: '',
};

module.exports = nextConfig;
