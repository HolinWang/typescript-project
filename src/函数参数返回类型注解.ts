/**
* 模块名:
* 代码描述:
* 作者: Holin  Wang
* 创建时间:2023/04/23 00:56:35
*/

// 返回值是number类型
function getTotal(a: number,b: number) : number{
  return a+b;
}
const c = getTotal(1,2);


// 返回值是void类型
function hello() : void{
  console.log("hello");
}

// 返回值是never类型
function erorFunc() : never{
  throw new Error();
  console.log("异常，永远走不出该方法");
}
function forFunc() : never{
  while(true){}
  console.log("死循环");
}

// 返回值是对象 number类型
function add({a,b} : {a:number,b:number}){
  return a + b; 
}
const totalC = add({a:1,b:2});

function getNum({a}:{a:number}){
  return a;
}
const totalA = getNum({a:1});