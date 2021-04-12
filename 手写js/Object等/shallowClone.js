// 浅拷贝

// 直接赋值
let arr1 = [1,2,3];
let arr2 = arr1;


// Object.assign()
// 和扩展运算符一样，assign也不能对深的对象拷贝
let target = {a:1};
let obj1 = {b:2};
let obj2 = {c:3};
Object.assign(target, obj1, obj2);
console.log(target); // {a:1, b:2, c:3}

let obj1 = {b:2, d:{e:2}};
Object.assign(target, obj1, obj2);
obj1.d.e = 5;
obj1.b = 9;
console.log(target); // {a:1,b：2,c:3,d:{e:5}}

// 扩展运算符
// 扩展运算符对于浅层有深拷贝的效果
let obj1 = {a:1, b:{c:1}};
let obj2 = {...obj1};
obj1.a = 2;
console.log(obj1); //{a:2, b:{c:1}}
console.log(obj2); //{a:1, b:{c:1}}

obj1.b.c = 2;
console.log(obj1); //{a:2, b:{c:2}}
console.log(obj2); //{a:1, b:{c:2}}

// 数组方法实现数组的浅拷贝
// Array.prototype.slice
let arr = [1,2,3,4];
arr.slice() === arr; //false;

// Array.prototype.concat
let arr = [1,2,3,4];
arr.concat() === arr; // false

// 手写浅拷贝
// 浅拷贝：只考虑对象类型。
function shallowClone(obj) {
  if(!obj || typeof obj !== 'object') return;
  let newObj = Array.isArray(obj) ? [] : {};
  for( let key in obj) {
    if(obj.hasOwnProperty(key)) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

