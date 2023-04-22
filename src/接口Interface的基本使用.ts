
/**
* 模块名:接口Interface的基本使用
* 代码描述:接口Interface的基本使用
* 作者: Holin  Wang
* 创建时间:2023/04/23 01:24:04
*/

const superGirl = (
  name:string,
  age:number
) => {
  age < 30 && console.log(name + '年轻有为')
  age >= 30 && console.log(name + '经验丰富')
}

const getInfo = (
  name:string,
  age:number
) => {
  console.log(name + ','+age+'岁，年轻有为')
}
getInfo('蜘蛛侠',18);
superGirl('蜘蛛侠',18);




// 接口Interface的使用
interface Girl {
  name:string,
  age:number,
  // 该参数可以不传
  sex?:string
}
const girl = {
  name:"蜘蛛侠",
  age:18,
  sex:'man'
}
const superGirl2 = (girl:Girl) => {
  girl.age < 30 && console.log(girl.name + '年轻有为')
  girl.age >= 30 && console.log(girl.name + '经验丰富')
}
const getInfo2 = (girl:Girl) => {
  console.log(girl.name + ','+girl.age+'岁，年轻有为');
  girl.sex && console.log(girl.name + girl.sex + ','+girl.age+'岁，年轻有为');
} 
getInfo2(girl);
superGirl2(girl);