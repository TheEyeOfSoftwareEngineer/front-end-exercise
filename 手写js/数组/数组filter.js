// filter

Array.prototype.myFilter = function(callback, thisArg) {
  if(this == null) {
    throw new TypeError('this is null or undefined');
  }
  if(typeof callback !== 'function') {
    throw new TypeError(callback + ' is not a function');
  }
  const obj = new Object(this);
  const len = obj.length >>> 0;
  let k = 0, res = [];
  while(k < len) {
    if(k in obj) {
      if(callback.call(thisArg, obj[k], k, obj)) {
        res.push(obj[k]);
      }
    }
    k++;
  }  
  return res;
}

arr = [1,2,3,4];
let q = arr.myFilter(function(value, index, array) {
  console.log("value: " + value + " index: " + index);
  return value % 2 === 0;
}, []);
console.log(q);