/**
 * 缓存优化：
 *  1.babel缓存: 在babel-loader插件下配置参数
 *   catchDirectory: true
 *  作用： 让第二次打包速度变快
 *  原理： 第二次打包只会重新处理被修改的js文件，未被修改的js文件将不再使用babel-loader处理打包直接取缓存
 * 
 *  2.使用hash修改输入文件名和输出文件名，
 *  浏览器通过判断文件名的hash值是否相等来识别是否最新资源，从而决定是取缓存还是拿最新，
 *  这个需要服务端设置缓存来配合使用
 *  1）hash    eg. 文件名.[hash:10].js
 *    每次webpack构建打包都会产生一个唯一的hash，js和css等都是使用同一个hash，所以就算我们修改一个文件，
 *    其他所有文件的缓存也会失效，因为hash变化了
 *  2）chunkhash：eg. 文件名.[chunkhash:10].js
 *    同一个chunk下打包产生的hash是一样的，所以同一个chunk下的某个文件修改，这个chunk下hash发生改变
 *    所以这个chunk的其他所有文件的缓存将全部失效
 *    chunk： 配置webpack的时候可以配置多入口，一个入口最终会生成一个chunk
 *  3）contenthash:  eg.文件名.[contenthash:10].js
 *    根据文件内容生成hash， 所以每个文件的hash都是不一样的
 *    当一个文件发生修改，它的hash改变，它的缓存失效
 *    但是其他文件的内容不变，所以hash不变，所以缓存还在
 *  
 */