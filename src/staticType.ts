/**
* 模块名: 静态类型 自定义静态类型
* 代码描述: 自定义
* 作者: Holin  Wang
* 创建时间:2023/04/23 00:31:56
*/

let count : number = 1;

interface man {
  name:string,
  age:number

}

const holinWang : man = {
  name: 'holin',
  age:18
}

console.log(holinWang.name,holinWang.age)