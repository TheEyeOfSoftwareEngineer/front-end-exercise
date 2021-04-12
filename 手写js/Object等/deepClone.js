// 深拷贝

// 简单版深拷贝：只考虑普通对象属性，不考虑内置对象和函数。
function deepClone(obj) {
  if(!obj || typeof obj !== "object") return;
  let newObj = Array.isArray(obj) ? [] : {};
  for(let key in obj) {
    if(obj.hasOwnProperty(key)) {
      newObj[key] = typeof obj[key] === "object" ? deepClone(obj[key]) : obj[key];
    }
  }
  return newObj;
}

// JSON.stringify()
// 拷贝对象中如果有函数，undefined，symbol，使用该方法时会忽略
let obj1 = {a:0, b:{c:0}};
let obj2 = JSON.parse(JSON.stringify(obj1));
obj1.a = 1;
obj1.b.c = 9;
console.log(obj1); // {a:1, b:{c:9}};
console.log(obj2); // {a:0, b:{c:0}};

// 复杂版深克隆：基于简单版的基础上，还考虑了内置对象比如 Date、RegExp 等对象和函数以及解决了循环引用的问题。
const isObject = target => {
  return (typeof target === "object" || typeof target === "function") && target !== null;
}

function deepClone(target, map = new WeakMap()) {
  if(map.get(target)) return target;
  // 获取当前值的构造函数：获取它的类型
  let constructor = target.constructor;
  // 检测当前对象target是否与正则、日期格式对象匹配
  if (/^(RegExp|Date)$/i.test(constructor.name)) {
    // 创建一个新的特殊对象(正则类/日期类)的实例
    return new constructor(target);  
  }
  if (isObject(target)) {
    map.set(target, true);  // 为循环引用的对象做标记
    const cloneTarget = Array.isArray(target) ? [] : {};
    for (let prop in target) {
        if (target.hasOwnProperty(prop)) {
            cloneTarget[prop] = deepClone(target[prop], map);
        }
    }
    return cloneTarget;
  } else {
    return target;
  }
}