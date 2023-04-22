/**
* 模块名: 数组类型注解
* 代码描述:
* 作者: Holin  Wang
* 创建时间:2023/04/23 01:07:03
*/

// 类型推断
const numArr1 = [1,2,3];

// 单一类型注解
const numArr2 : number[] = [1,2,3];
const numArr3 : string[] = ['1','2','3'];
const undefinedArr : undefined[] = [undefined];

// 多类型注解

const arr : (number | string)[] = [1,'2'];

type Man = {
  name:string,
  age:number
}
class Man2{
  name:string;
  age:number
}
// Man 和 Man2 两种写法均可
const superMan : Man2[] = [
  {
    name:'蜘蛛侠',
    age:18
  },
  {
    name:'钢铁侠',
    age:28
  }
]
