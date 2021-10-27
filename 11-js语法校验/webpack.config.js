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
      /**
       * 语法检查： eslint-loader,
       * 设置检查规则：
       *  读取 package.json中的 "eslintConfig", 这种写法已经失效，新版本请在根路径下配置.eslintrc
       *  "eslintConfig":{
       *    "extends": "airbnb-base"
       *  }
       * 使用 "airbnb" 规范， 需要下载 eslint-config-airbnb-base，npm上发现它需要依赖 eslint-plugin-import  eslint
       * 所以一共需要安装: eslint  eslint-loader  eslint-config-airbnb-base eslint-plugin-import 
       */
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options:{}
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