const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
/**
 * HMR: hot module replacement  热模块替换，
 * 只需要在devServer中开启hot: true,就ok， webpack5.0后都是默认开启的
 * 开启原因： 某个文件被修改后，其他文件其实也都会被热更新执行打包一次，加大了打包的时间，不利于开发阶段代码调试
 * 对HMR的支持情况：
 *  css： 使用 'style-loader'是会支持的，这也是为什么在开发环境下不使用mini-css-extract-plugin.loader替换style-loader得原因之一
 *  js: 默认是不支持的， 需要在js代码中做处理
 *  伪代码：
 *      if(module.hot){
 *        // 说明开启了HMR
 *        module.hot.accept('被修改.js', function(){
 *            // 执行被修改js的回调，也就是更新打包被修改的这个js啦，其他的js模块就不会被重新打包编译了
 *            // 入口文件index.js是一定需要重新编译打包的，所以也就不用出来它啦
 *        })
 *      }
 * html: 当hot:true后，我们的html的热更新会失效： 也就是我们去修改了html文件，居然没有变化
 * 解决: 入口配置改为数组，将index.html加入
 * html其实不需要HMR的功能，因为有且只有一个，其实被修改直接重新编译打包就好了
 */
module.exports = {
  entry: ['./src/index.js', './src/index.html'],
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
    open: true,
    hot: true
  },
  /**
   * source-map可以在代码错误的时候提示错误位置，这个一般是在开发环境中调试时使用
   * 原理： 有多种source-map,常见的source-map、inline-source-map、hidden-source-map、eval-source-map等，
   *  会根据选择的source-map类型的规则，在打包输出js文件外部或者内部生产js的映射规则，当报错的时候会根据记录的映射关系进行错误索引，然后提示
   *  错误所在的具体位置
   */
  devtool: 'source-map'
}