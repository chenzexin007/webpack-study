const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  /**
   * 当只配置一个入口文件，然后我们又想要有两个chunk输出，这个时候需要取这个入口文件js中惊醒import('').then处理
   */
  entry: './src/js/index.js', 
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
  optimization:{
    splitChunks:{
      chunks: 'all'
    }
  },
  mode: 'production'
}