// forEach

Array.prototype.myForEach = function(callback, thisArg) {
  if(this == null) {
    throw new TypeError('this is null or undefined');
  }
  if(typeof callback !== 'function') {
    throw new TypeError(callback + ' is not a function');
  }
  const obj = new Object(this);
  const len = obj.length >>> 0;
  let k = 0;
  while(k < len) {
    if(k in obj) {
      callback.call(thisArg, obj[k], k, obj);
    }
    k++;
  }
}

arr = [1,2,3,4];
arr.myForEach(function(value, index, array) {
  console.log("value: " + value + " index: " + index);
}, []);