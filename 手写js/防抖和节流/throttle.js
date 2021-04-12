// 节流
// 触发高频事件，且 N 秒内只执行一次。
// 连续触发事件但在n秒内只执行一次函数
// 对于节流有时间戳和定时器两种版本

// 时间戳版本
function throttle(fn, delay) {
  let prev = 0;
  return function() {
    let now = Date.now();
    const context = this, args = arguments;
    if(now - prev > delay) {
      fn.apply(context, args);
      prev = now;
    }
  }
}

// 定时器版本
function throttle(fn, delay) {
  let timer = null;
  return function() {
    const context = this, args = arguments;
    // !timer && fn.apply(context, args);
    // timer = setTimeout(() => {
    //   timer = null;
    // }, delay);
    if(!timer) {
      timer = setTimeout(() => {
        timer = null;
        fn.apply(context, args);
      }, delay);
    }
  }
}

// 合二为一
function throttle(fn, delay, type) {
  let timer, prev;
  if(type === 1) {
    prev = 0;
  } else {
    timer = null;
  }

  return function() {
    const context = this, args = arguments;
    if(type === 0) {
      const now = Date.now();
      if(now - prev > delay) {
        fn.apply(context, args);
        prev = now;
      }
    } else {
      if(!timer) {
        timer = setTimeout(() => {
          timer = null;
          fn.apply(context, args);
        }, delay);
      }      
    }
  }
}