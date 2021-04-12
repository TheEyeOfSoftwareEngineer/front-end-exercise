// 手写bind

// - 判断调用调用对象是否为函数
// - 保存当前函数的引用，获取其余传入参数值
// - 创建一个函数返回
// - 函数内返回使用apply来绑定函数调用，需要判断函数作为构造函数的情况，这个时候需要传入当前函数的this给aplly调用，其余情况都传入指定的上下文对象

Function.prototype.myBind = function(context) {
  if(typeof this !== 'function') throw new Error('invalid call');
  let args = [...arguments].slice(1);
  let fn = this;
  return function Fn() {
    return fn.apply(this instanceof Fn? this : context,
      args.concat(...arguments));
  }
}

Function.prototype.myBind = function(oThis){
  if(typeof this !== 'function'){
      throw new TypeError('被绑定的对象需要是函数')
  }
  var self = this
  var args = [].slice.call(arguments, 1)
  fBound = function(){ //this instanceof fBound === true时,说明返回的fBound被当做new的构造函数调用
      return self.apply(this instanceof fBound ? this : oThis, args.concat([].slice.call(arguments)))
  }
  var func = function(){}
  //维护原型关系
  if(this.prototype){
      func.prototype = this.prototype
  }
  //使fBound.prototype是func的实例，返回的fBound若作为new的构造函数，新对象的__proto__就是func的实例
  fBound.prototype = new func()
  return fBound
}