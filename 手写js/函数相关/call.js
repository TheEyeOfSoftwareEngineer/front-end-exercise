// 手写call

// - 判断调用对象是否为函数，即使我们定义在函数的原型上，但是可能休闲使用call等方式调用的情况
// - 判断传入上下文对象是否存在，如果不存在，则设置为window；比如上面例子里的person1
// - 判断传入的参数，截取第一个参数后的所有参数（第一个参数为调用的函数）
// - 将函数作为上下文对象的一个属性
// - 使用上下文对象来调用这个方法，并保存返回结果
// - 删除所有新增的属性
// - 返回结果

// 用法
var person = {
  fullName: function() {
      return this.firstName + " " + this.lastName;
  }
}
var person1 = {
  firstName:"Bill",
  lastName: "Gates",
}
var person2 = {
  firstName:"Steve",
  lastName: "Jobs",
}
person.fullName.call(person1);  // 将返回 "Bill Gates"

// 手写

// 使用一个指定的 this 值和一个或多个参数来调用一个函数。
// 实现要点：
// this 可能传入 null；
// 传入不固定个数的参数；
// 函数可能有返回值；

Function.prototype.myCall = function(context) {
  if(typeof this !== 'function') throw new Error("invalid call");
  let context = context || window;
  let args = [...arguments].slice(1);
  context.fn = this;
  let result = context.fn(args);
  delete context.fn;
  return result;
}

Function.prototype.ownCall = function(context, ...args) {
  context = (typeof context === 'object' ? context : window)
  // 防止覆盖掉原有属性
  const key = Symbol()
  // 这里的this为需要执行的方法
  context[key] = this
  // 方法执行
  const result = context[key](...args)
  delete context[key]
  return result
}