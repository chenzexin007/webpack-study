const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './src/index.js',
  output:{
    filename: 'index.js',
    path: resolve(__dirname, 'built')
  },
  module: {
    rules:[
      {
        test: /\.css$/,
        use:[
          'style-loader',
          'css-loader'
        ]
      },
      {
        exclude: /\.(css|js|html)$/,
        loader: 'file-loader' 
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  mode: 'development',
  // 自动化，在内存中编译，不会有任何输出
  // 启动： npx webpack-dev-server
  devServer:{
    static: {
      directory: resolve(__dirname, 'built'),
    },
    // contentBase: resolve(__dirname, 'built'),
    // 启动gzip压缩, 体积变小，编译加快
    compress: true,
    port: 3000,
    open: true
  },
}