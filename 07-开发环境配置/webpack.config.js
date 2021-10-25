const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './src/index.js',
  output:{
    filename: 'index.js',
    path: resolve(__dirname, 'built')
  },
  module:{
    rules: [
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|jpeg|svg)$/,
        loader: 'url-loader',
        options:{
          limit: 7 * 1024,
          name: '[hash:10].[ext]'
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        exclude: /\.(png|jpg|jpeg|svg|css|less|html)$/,
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
  devServer:{
    static:{
      directory: resolve(__dirname, 'built'),
    },
    compress: true,
    port: 3000,
    open: true
  }
}