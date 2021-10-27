const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './src/js/index.js',
  output:{
    filename: 'js/built.js',
    path: resolve(__dirname, 'build')
  },
  module:{
    rules: [
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  // 只需要改为生成环境，生产环境打包会自动使用一些插件，其中有UglifyPlugin插件就是压缩js的
  mode: 'production'
}