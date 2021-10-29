const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 配置多入口，并且配置多出口，这样可以有多少个入口就输出多少个chunk（记得输出的文件名摇处理成不一样）
module.exports = {
  // entry: './src/js/index.js',
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
  /**
   * 配置optimization,
   * 当单入口时： 可以将引用node_modules的文件单独打包成一个chunk
   * 当多个入口时： 1.可以将引用node_modules的文件单独打包成一个chunk
   *                2. 将多个入口中引用的公共文件打包成一个chunk, 例如两个文件中都引入了jq，jq只会被打包一次
   */
  optimization:{
    splitChunks:{
      chunks: 'all'
    }
  },
  mode: 'production'
}