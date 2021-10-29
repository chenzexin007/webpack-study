import $ from 'jquery'


console.log($)

/**
 * 通过js将指定js文件输出为一个单独的chunk
 */ 
import(/* webpackChunkName: 'test' */'./test').then((res => {
  console.log(res.mul(1,5))
})).catch(err => {
  console.log("错误",err)
})