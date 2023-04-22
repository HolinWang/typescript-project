/**
* 模块名: 对象类型 数组类型 类类形 函数类形
* 代码描述:
* 作者: Holin  Wang
* 创建时间:2023/04/23 00:38:45
*/


// null,undefinde,symbol,boolean,void
const userName : string = 'holin';
const age : number = 100;

// 对象类型
const man:{
  name:string,
  age:number
} = {
  name:'holin wang',
  age:18
}
// 数组类型
const superMan :string [] = ['Holin','Holin2','Holin3'];

// 对象类型3-类类形
class Person{}
const holin : Person = new Person();

// 对象类型4-函数类形
const holin2 : () => string = () => {
  return 'holin2-wang'
}