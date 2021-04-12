// 手写assign

Object.myAssign =  function(target, ...source) {
  if(target == null) {
    throw new TypeError('Cannot convert undefined or null to object');
  }
  let res = Object(target);
  source.forEach(function(obj) {
    if(obj != null) {
      for(let key in obj) {
        if(obj.hasOwnProperty(key)) {
          res[key] = obj[key];
        }
      }
    }
  })
  return res;
}