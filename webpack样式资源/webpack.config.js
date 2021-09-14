
const { resolve } = require('path')
module.exports = {
  // 入口
  entry: './src/index',
  // 出口
  output:{
    filename: 'index.js',
    path: resolve(__dirname, 'build')
  },
  // Loader 翻译
  module:{
    rules: [
      {
        test: /\.css$/,
        use:[ // 从右到左，或者从下到上
          // 创建style标签，将js中的样式资源引入， 插入到header中
          'style-loader',
          // 将css翻译成commonjs模块加入到js中，里面内容是样式字符串
          'css-loader'
        ]
      },
      {
        test: /\.less$/,
        use:[
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      }
    ]
  },
  plugins:[
    // plugins
  ],
  mode: 'development'
}