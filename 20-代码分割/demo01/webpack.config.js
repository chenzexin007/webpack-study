const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 配置多入口，并且配置多出口，这样可以有多少个入口就输出多少个chunk（记得输出的文件名摇处理成不一样）
module.exports = {
  entry:{
    main: './src/js/index.js',
    test: './src/js/test.js'
  },
  output:{
    filename: 'js/[name].[contenthash:10].js',
    path: resolve(__dirname, 'build')
  },
  module:{
    rules: []
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify:{
        collapseWhitespace: true,
        removeComments: true
      }
    })
  ],
  mode: 'production'
}