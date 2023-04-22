/**
* 模块名: 类的使用
* 代码描述: 继承  重写 super
* 作者: Holin  Wang
* 创建时间:2023/04/23 01:55:47
*/
class Lady{
  content = 'hello';
  say(){
    return this.content;
  }
}
const nash = new Lady()
console.log(nash.say())


// 继承
class teacher extends Lady{
  sayHello(){
    return '上课';
  }
  // 重写父类方法
  // super继承父类的方法
  say(){
    return super.say() + '下课';
  }
}

const namei = new teacher()
console.log(namei.say(),namei.sayHello())