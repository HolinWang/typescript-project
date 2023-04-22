/**
* 模块名: 类型注解  类型推断
* 代码描述: 鼠标hove到变量上去 是可以显示变量是什么类型的
            如果 TS 能够自动分析变量类型， 我们就什么也不需要做了
            如果 TS 无法分析变量类型的话， 我们就需要使用类型注解
* 作者: Holin  Wang
* 创建时间:2023/04/23 00:47:29
*/


let count :number;
count = 123;

let count2 = 123;

// 类型推断
const a = 1;
const b = 2;
const c = a + b;

// 类型注解
function getCount(a: number,b: number){
  return a + b;
}
// 类型推断
const total = getCount(1,2);


// 类型推断   hover自动推断
const girl = {
  name:'nash0',
  age:18
}