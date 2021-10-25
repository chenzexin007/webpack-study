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
        test: '/\.css/',
        use:[
          'style-loader',
          'css-loader'
        ]
      },
      {
        exclude: '/\.(css|js|html)$/',
        loader: 'file-loader' 
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  mode: 'development'
}