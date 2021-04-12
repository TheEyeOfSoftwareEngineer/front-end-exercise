// reduce

Array.prototype.myReduce = function(callback, initialValue) {
  if(this == null) {
    throw new TypeError('this is null or undefined');
  }
  if(typeof callback !== 'function') {
    throw new TypeError(callback + ' is not a function');
  }
  const obj = new Object(this);
  const len = obj.length >>> 0;
  let k = 0, accumulation;
  if(arguments.length > 1) {
    accumulation = initialValue;
  } else {
    // 没传入初始值的时候，取数组中第一个非 empty 的值为初始值
    while(k < len && !(k in obj)) {
      k++;
    }
    if(k > len) {
      throw new TypeError('Reduce of empty array with no initial value');
    }
    accumulation = obj[k++];
  }  
  
  while(k < len) {
    if(k in obj) {
      accumulation = callback(accumulation, obj[k],k, obj);
    }
    k++;
  }  
  return accumulation;
}

arr = [1,2,3,4];
let q = arr.myReduce(function(accumulation, value, index, obj) {
  console.log("value: " + value + " index: " + index);
  console.log(accumulation);
  console.log(typeof value);
  console.log(accumulation + value);
  return accumulation + value;
}, 0);

console.log(q);

// [].toString().valueOf();
console.log([] + 1, typeof([] + 1));