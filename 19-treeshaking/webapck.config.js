/**
 * tree shaking   树摇
 * 使用： 第一步： 我们的文件需要使用es6的模块语法
 *        第二部： 我们将环境设置为生产环境  mode: ''production
 * 作用： 树摇： 故名思意，我们引入了很多的第三方插件，但是我们只是使用里面的部分资源，
 *        这个时候我们开启tree shaking树摇，可以将没有使用的js或者css部分去掉
 *        减小代码体积
 * 问题： 在部分的webpack版本中，我们开启tree shaking会把某些css直接摇掉了，打包后就不包含css了
 * 解决： 在package.json文件中配置
 *    "sideEffects": ["*.css", "*.less"]  不匹配css和less文件，防止被去掉
 */