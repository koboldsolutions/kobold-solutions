const path = require("path");
const { i18n } = require('./next-i18next.config')

/** @type {import('next').NextConfig}
 
*/

const nextConfig = {
  output: 'export',
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, "css")],
  },
  basePath: '',
  assetPrefix: ''
}

module.exports = {
  i18n,
  nextConfig
};

