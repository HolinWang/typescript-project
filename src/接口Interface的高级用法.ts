
/**
* 模块名:接口Interface的高级用法
* 代码描述:接口Interface的高级用法
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
  name:string;
  age:number;
  // 该参数可以不传
  sex?:string;
  /////////////////////////////////任何属性名，任何类型
  [propname:string]:any;
  slogan():string;
}
const girl = {
  name:"蜘蛛侠",
  age:18,
  sex:'man',
  master:'yes',
  slogan(){
    return '消灭坏人'
  },
  teach(){
    return '教你消灭坏人'
  }
}

interface superGMaster extends Girl{
  teach(): string;
}

class superGirl3 implements Girl{
  name = "蜘蛛侠";
  age = 18;
  slogan(){
    return ("slogan")
  }
}

const superGirl2 = (girl:superGMaster) => {
  girl.age < 30 && console.log(girl.name + '年轻有为')
  girl.age >= 30 && console.log(girl.name + '经验丰富')
  console.log(girl.teach());
}
const getInfo2 = (girl:Girl) => {
  console.log(girl.name + ','+girl.age+'岁，年轻有为');
  girl.sex && console.log(girl.name + girl.sex + ','+girl.age+'岁，年轻有为');
  girl.master && console.log('大师');
  console.log(girl.slogan());
  
} 



getInfo2(girl);
superGirl2(girl);