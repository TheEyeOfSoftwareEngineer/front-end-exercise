// instanceof 

// instanceof运算符用于判断构造函数的prototype属性是否出现在对象的原型链中的任何位置

// 实现步骤
// 首先获取类型的原型
// 然后获得对象的原型
// 然后一直循环判断对象的原型是否等于类型的原型直到对象原型为null，因为原型链的终点为null

function myInstanceof(left, right) {
  let proto = Object.getPrototypeOf(left);
  let prototype = right.prototype;

  while(true) {
    if(!proto) return false;
    if(proto === prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
}