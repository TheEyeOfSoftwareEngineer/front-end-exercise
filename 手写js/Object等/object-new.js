// 手写new

// new 运算符用来创建用户自定义的对象类型的实例或者具有构造函数的内置对象的实例。

// 实现要点：
// - new 会产生一个新对象；
// - 新对象需要能够访问到构造函数的属性，所以需要重新指定它的原型；
// - 构造函数可能会显示返回

function myNew() {
  let obj = new Object();
  let constructor = [...arguments].shift();
  obj.__proto__ = constructor.prototype;
  let res = constructor.apply(obj, arguments);
  // ret || obj 这里这么写考虑了构造函数显示返回 null 的情况
  return typeof res === 'object' ? res || obj : obj;
}

function person(name, age) {
  this.name = name
  this.age = age
}
let p = objectFactory(person, '布兰', 12)
console.log(p)  // { name: '布兰', age: 12 }