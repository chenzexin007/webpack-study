// js
function testJS(){
  console.log('webpack可以解析js')
}
testJS()

// json
import data from './test.json'
console.log('webpack可以解析json',data)

// css   报错， webpack只能解析js、json文件
// import './test.css'

/**
 * 简介： webpack需要理解五个东西： 
 *   1） Entry  入口， webpack以那个文件为入口起点开始打包，分析构建内部依赖图
 *   2） Output 出口， webpack打包后的资源bundles输出到哪里去，以及如何命名
 *   3） Loader 相当于翻译官，因为webpack自身只能理解js，所以需要使用对应的Loader将非js、json文件进行“翻译”，然后webpack才可以处理
 *   4） Plugins 用于执行范围更广的任务，不像Loader只做“翻译”， Plugins可以做  从打包优化和压缩一直到重新定义环境变量等
 *   5） Mode  模块环境： 
 *            a)开发环境  development
 *            b)生产环境  production
 *      生产环境和开发环境都会默认安装一些东西（有一些不一样），生产环境还有对代码进行压缩，所以体积比较小 
 *      eg.  webpack ./src/index.js -o ./build/index.js  --model=development    
 *      使用webpack以  ./src/index.js 为入口， ./build/index.js 为出口， 在开发环境下 进行打包。
 * 结论2： webpack只能直接解析js、json文件
 */