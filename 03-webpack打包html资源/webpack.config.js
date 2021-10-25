const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
/**
 * Loader的使用: 1.安装  2.使用
 * Plugin的使用: 1.安装  2.引入  3.使用
 */
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: resolve(__dirname, 'build')
  },
  module:{
    rules: [

    ]
  },
  plugins:[
    // 这个会在出口文件创建html文件，并且自动将打包后的资源(js、css等)引入，
    // new HtmlWebpackPlugin()
    // 使用配置
    new HtmlWebpackPlugin({
      template: './src/index.html'  // 以该html作为模板，然后还是会自动引入打包后的js、css等资源
    })
  ],
  mode: 'development'
}