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
      // {
      //   // 这里使用了会报错或者白屏， 但是不使用的时候发现资源还是会被处理，例如.ttf文字资源，所以这块还是比较迷惑的
      //   exclude: /\.(css|less|js|html)$/,
      //   loader: 'file-loader'
      // }
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