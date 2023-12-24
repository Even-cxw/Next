/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  sassOptions: {
    sassOptions: {
      includePaths: [
        path.join(__dirname, './styles/_vars.scss'),
        path.join(__dirname, './styles/_mixins.scss'),
      ],
    },
  },
}
module.exports = nextConfig
