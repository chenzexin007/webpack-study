const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
  entry: './src/js/index.js',
  output:{
    filename: 'js/buit.js',
    path: resolve(__dirname, 'build')
  },
  module:{
    rules: [
      {
        test: /\.css$/,
        use:[
          /**
           * 执行js，创建style标签，将css插入heade
           * 问题： 
           *    这样的动态插入方式，会使屏幕闪白
           *    css是在js文件中的，js会比较臃肿且解析慢
           */
          // 'style-loader',  
          /**
           * 使用 MiniCssExtractPlugin.loader代替style-loader
           *  作用： 
           *    直接在html中创建link标签，引入css
           *    解决style-loader上面带来的两个问题
           */
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      // 对输出文件进行重命名, 默认叫main.css
      filename: 'css/built.css'
    })
  ],
  mode: 'development'
}