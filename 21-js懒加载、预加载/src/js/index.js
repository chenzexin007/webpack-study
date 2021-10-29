

console.log("index文件被加载")
 

/**
 * 
 * 懒加载：通过异步实现js的懒加载， 当按钮点击时。test.js文件才被加载
 * 预加载： 开启webpackPrefetch预加载，test.js文件将会在浏览器中被先请求获取到，但是不会去执行
 */
document.getElementById("app").onclick = function(){
  import(/* webpackChunkName: 'test', wenpackPrefetch: true */'./test.js').then(({mul}) => {
    console.log(mul(1,2))
  }).catch(err => {
    console.log(err)
  })
}
