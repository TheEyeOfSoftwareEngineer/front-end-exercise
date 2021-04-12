// 继承

// 1.原型链继承
function Animal1() {
  this.colors = ['black', 'white'];
}
Animal1.prototype.getColor = function() {
  return this.colors;
}
function Dog1() {};
Dog1.prototype = new Animal1();

let dog1 = new Dog1();
dog1.colors.push('brown');
let dog2 = new Dog1();
console.log(dog2.colors);
// 原型链继承存在的问题：
//   问题1：原型中包含的引用类型属性将被所有实例共享；
//   问题2：子类在实例化的时候不能给父类构造函数传参；

// 2.借助构造函数实现继承
function Animal2(name) {
  this.name = name;
  this.getName = function() {
    return this.name;
  }
}
function Dog2(name) {
  Animal2.call(this, name);
}
Dog2.prototype = new Animal2();
let dog = new Dog2('jack');
console.log(dog.getName());
// 借用构造函数实现继承解决了原型链继承的 2 个问题：引用类型共享问题以及传参问题。但是由于方法必须定义在构造函数中，所以会导致每次创建子类实例都会创建一遍方法

// 3.组合继承
function Animal3(name) {
  this.name = name;
  this.colors = ['black', 'white'];
}

Animal3.prototype.getName = function() {
  return this.name;
}

function Dog3(name, age) {
  // console.log(this); ==> Dog3 {}
  Animal3.call(this, name);
  this.age = age;
}
Dog3.prototype = new Animal3();
// 这里为什么要改变constructor的指向呢？原因是因为Dog3.prototype = new Animal3()后，Dog3.prototype.constructor指向的是Animal3这个构造函数了而不是Dog3，所以需要覆写
Dog3.prototype.constructor = Dog3;

let dog3 = new Dog3('奶昔', 2)
dog3.colors.push('brown')
let dog4 = new Dog3('哈赤', 1)
console.log(dog4) 
// 组合继承结合了原型链和盗用构造函数，将两者的优点集中了起来。基本的思路是使用原型链继承原型上的属性和方法，而通过盗用构造函数继承实例属性。这样既可以把方法定义在原型上以实现重用，又可以让每个实例都有自己的属性。
// 组合继承已经相对完善了，但还是存在问题，它的问题就是调用了 2 次父类构造函数，第一次是在 new Animal()，第二次是在 Animal.call() 这里。

// 4.寄生式组合继承

// 寄生式组合继承写法上和组合继承基本类似，区别是如下这里：
// - Dog.prototype = new Animal()
// - Dog.prototype.constructor = Dog

// + function F() {}
// + F.prototype = Animal.prototype
// + let f = new F()
// + f.constructor = Dog
// + Dog.prototype = f

function object(obj) {
  function F() {};
  F.prototype = obj;
  return new F();
}
function inheritPrototype(child, parent) {
  let prototype = object(parent.prototype);
  prototype.constructor = child;
  child.prototype = prototype;
}
inheritPrototype(Dog, Animal3);
// 还可以基于组合继承的代码改成最简单的寄生式组合继承
// - Dog.prototype =  new Animal()
// - Dog.prototype.constructor = Dog

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// 5.class 实现继承
class Animal {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}
class Dog extends Animal {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
}