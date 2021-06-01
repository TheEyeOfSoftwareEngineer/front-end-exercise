// 柯里化

function add(a, b, c) {
  return a + b + c;
}
add(1, 2, 3);
let addCurry = curry(add);
let res = addCurry(1)(2)(3);
console.log(res);

function curry(fn) {
  // console.log(fn.length, arguments);
  let judge = (...args) => {
    if(args.length === fn.length) return fn(...args);
    return (...arg) => judge(...args, ...arg);
  }
  return judge;
}