const fs = require("fs");
const path = require("path");


module.exports = {
  // 减少组件渲染次数 关闭
  reactStrictMode: false,
  pageExtensions: ["page.jsx", "page.js"],
  // sassOptions: {
  //   prependData: varsStr + mixinsStr,
  // },
  // webpack: (config, { isServer }) => {
  //   if (!isServer) {
  //     config.module.rules.forEach(rule => {
  //       if (rule.test && rule.test.toString().includes('scss')) {
  //         rule.use.push({
  //           loader: 'resolve-url-loader',
  //           options: { sourceMap: true, root: path.resolve(__dirname) },
  //         })
  //       }
  //     })
  //   }

  //   return config
  // }
};