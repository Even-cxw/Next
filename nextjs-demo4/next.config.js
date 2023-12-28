/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['pbs.twimg.com'],
  },
  experimental: {
    appDir: true,
  },
  sassOptions: {
    sassOptions: {
      includePaths: [
        path.join(__dirname, './src/styles/_vars.scss'),
        path.join(__dirname, './src/styles/_mixins.scss'),
      ],
    },
  },
}
module.exports = nextConfig
