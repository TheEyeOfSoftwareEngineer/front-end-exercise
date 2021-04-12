// 数组打平

// 一般方法：不考虑深度，直接打平

function flat(arr) {
  let res = [];
  for(let i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])) {
      res = res.concat(flat(arr[i]));
    } else {
      res.push(arr[i]);
    }
  }
  return res;
}

// 一般方法：考虑深度
function flatDepth(arr, depth) {
  let res = [];
  for(let i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i]) && depth > 0) {
      res = res.concat(flatDepth(arr[i], depth-1));
    } else {
      res.push(arr[i]);
    }
  }
  return res;
}

// reduce函数迭代
function flatReduce(arr) {
  return arr.reduce(function(prev, next) {
    return prev.concat(Array.isArray(next) ? flatReduce(next) : next);
  }, []);
}

// 扩展运算符
function flatExtension(arr) {
  while(arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr);
  }
  return arr;
}
function flatExtension(arr, depth) {
  while(depth > 0 && arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr);    
    depth --;
  }
  return arr;
}

// split和toString
function flat(arr) {
  return arr.toString().split(',').map(Number);
}

// es6 flat
function flatten(arr) {
  return arr.flat(Infinity); // arr.flat([depth]) 默认不传为1。如果层数不确定，传入Infinity代表无论多少层都要展开;
}
console.log(flatten([1,2,[3,[4]], [5]]));  

// 正则和JSON方法
function flatten(arr) {
  let str = JSON.stringify(arr);
  // console.log(str);
  // "[1,2,[3,[4]],[5]]"
  str = str.replace(/(\[|\])/g, '');
  // console.log(str);
  // "1,2,3,4,5"
  str = '[' + str + ']';
  // [1,2,3,4,5]
  return JSON.parse(str);
}


