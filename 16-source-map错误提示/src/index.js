import './index.less'
import './iconfont.css'
import a from './outher.js'
import './test.js'
a()

console.log('index.js 被执行啦')

if(module.hot){
  module.hot.accept('./outher', function(){
    a()
  })
}