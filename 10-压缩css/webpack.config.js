const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
process.env.NODE_ENV = 'development'
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
          MiniCssExtractPlugin.loader,
          'css-loader',
          // 使用默认配置
          // 'postcss-loader',
          // 自定义配置
          /**
           *   "browserslist":{
                "development":[
                  "last 1 chrome version",
                  "last 1 safari version",
                  "last 1 firefox version"
                ],
                "production":[
                  ">0.2%",
                  "not dead",
                  "not op_mini all"
                ]
              }
           */
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions:{
                // ident: 'postcss',  // 默认就这么写
                plugins: () => [
                  // postcss 插件处理
                  // 会去读取package.json中的browserslist里面的配置，通过配置加载指定的兼容性css样式
                  // 默认会读取生成环境， 需要指定node的环境为开发环境才会去读取browserslist的开发环境配置
                  require('postcss-preset-env')()
                ]
              }
            }
          }
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
    }),
    // 压缩css
    new OptimizeCssAssetsWebpackPlugin()
  ],
  mode: 'development'
}