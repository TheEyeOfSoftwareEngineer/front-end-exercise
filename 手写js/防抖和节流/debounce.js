// 防抖
// 触发高频事件 N 秒后只会执行一次，如果 N 秒内事件再次触发，则会重新计时。



// 非立即执行
// 此函数一开始不会马上执行，而是等到用户操作结束之后等待wait秒后才执行，如果在wait之内用户又触发了事件，则会重新计算
function debounce(fn, delay) {
  let timer = null;
  return function() {
    let context = this,
        args = arguments;
    if(timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  }
}

// 立即执行
// 立即执行就是触发事件后马上先执行一次，直到用户停止执行事件等待wait秒后再执行一次
function debounce(fn, delay) {
  let timer = null;
  return function() {
    const context = this, args = arguments;
    const now = !timer;
    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
    }, delay);
    if(now) {
      fn.apply(context, args);
    }    
  }
}

// 合二为一
function debounce(fn, delay, immediate) {
  let timer = null;
  return function() {
    const context = this, args = arguments;
    timer && clearTimeout(timer);
    if(immediate) {
      const now = !timer;
      timer = setTimeout(() => {
        timer = null;
      }, delay);
      now && fn.apply(context, args);
    } else {
      timer = setTimeout(() => {
        fn.apply(context, args);
      }, delay);
    }
  }
}

// 在react项目中使用
// src/@utils/debounce.js
export const debounce = (fn, wait) => {
  let time = null;
  return function(e) {
    if(timer) {
      clearTimeout(timer);
    }
    time = setTimeout(() => {
      fn.apply(this, arguments);
    }, wait)
  }
}

import {debounce} from '../..//@utils/debounce.js'

scroll = debounce((e) => {
  // ...
}, 500)

{/* <div onScroll={(e) => {this.scroll(e)}}></div> */}