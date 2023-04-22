/**
* 模块名: 元组的使用和类型约束
* 代码描述: 元组的使用和类型约束  使用场景很少
* 作者: Holin  Wang
* 创建时间:2023/04/23 01:17:47
*/

const superMan : (string | number)[] = ['钢铁侠',18,'蜘蛛侠'];

const superMan2 : [string, number, string] = ['钢铁侠',18,'蜘蛛侠'];


// 元组
const superMan3 : [string,string,number][] = [
  ['钢铁侠1','蜘蛛侠1',1800],
  ['钢铁侠2','蜘蛛侠2',1800],
  ['钢铁侠3','蜘蛛侠3',1800]
];