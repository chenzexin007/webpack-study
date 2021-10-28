/**
 * oneOf: 就是一个文件只匹配一种loader处理，这样可以减少匹配的次数
 * 原因： 每种loader会去匹配对应的文件，所以它就需要遍历所有文件，找到相匹配的文件，
 * 这个时候我们遍历很多我们之前使用过别的loader处理过的文件，且这些不需要我们当前这个loader处理，重复遍历了
 * 使用oneOf: [{test: //, use:[]},{} ... ],可以让文件a如果被里面数组中的loader处理后，数组中的其他loader遍历
 * 的时候就不会去匹配这个文件啦，就不存在重复遍历的问题
 * 带来问题： 
 *  这个时候，例如js需要使用eslint-loader检测语法，然后又要使用babel-loader适配es6，所以我们把eslint-loader提到
 *  oneOf:[]的外面，变成：
 *  module:{
 *    rules:[
 *      { loader: 'eslint-loader'  },
 *      {
 *        oneOf:[
 *          { loader: 'babel-loader },
 *          .
 *          .
 *          .
 *        ]
 *      }
 *    ]
 *  }
 * 这样，我们的js文件就可以使用两种loader进行处理了
 */