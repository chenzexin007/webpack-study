const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports={
  entry: './src/index.js',
  output:{
    filename: 'index.js',
    path: resolve(__dirname, 'build')
  },
  module:{
    rules:[
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.(jpeg|png|gif|svg)$/,
        // 这里需要安装 url-loader 和file-loader
        loader: 'url-loader',  // 只使用一个时，可以不用use，直接用loader
        options:{
          // 小于7kb的将打包成base64，这样会增大图片体积，但是不会再次发起img请求资源
          limit: 7 * 1024
        }
      },
      {
        test: /\.html$/,
        // 用来处理html中的img文件的，然后再给url-loader处理
        loader: 'html-loader'
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