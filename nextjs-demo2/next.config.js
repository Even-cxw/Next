/** @type {import('next').NextConfig} */
const fs = require("fs");
const path = require("path");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const varsStr = fs.readFileSync(path.join(__dirname, "./styles/_vars.scss"), {
  encoding: "utf8",
});

const mixinsStr = fs.readFileSync(
  path.join(__dirname, "./styles/_mixins.scss"),
  { encoding: "utf8" }
);

module.exports = {
  reactStrictMode: false,
  // pageExtensions: ["page.jsx", "page.js"],
  sassOptions: {
    prependData: varsStr + mixinsStr,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.module.rules.forEach(rule => {
        if (rule.test && rule.test.toString().includes('scss')) {
          rule.use.push({
            loader: 'resolve-url-loader',
            options: { sourceMap: true, root: path.resolve(__dirname) },
          })
        }
      })
    }

    return config
  }
}

