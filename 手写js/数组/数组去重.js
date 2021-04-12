// 数组去重

// ES5
function unique(arr) {
  return arr.filter(function(item, index, array) {
    return array.indexOf(item) === index;
  })  
}

console.log(unique([1,2,2,3,4,4,6]))

function unique(arr) {
  const map = {};
  const res = [];
  for(let i = 0; i < arr.length; ++i) {
    if(!map.hasOwnProperty(arr[i])) {
      map[arr[i]] = 1;
      res.push(arr[i]);
    }
  }
  return res;
}

console.log(unique([1,2,2,3,4,4,6]))

// ES6
var unique = arr => [...new Set(arr)];
console.log(unique([1,2,2,3,4,4,6]))

