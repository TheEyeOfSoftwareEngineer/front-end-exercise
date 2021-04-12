// 手写apply

// - 判断调用对象是否为函数
// - 判断上下文对象是否存在
// - 将函数作为上下文对象的一个属性
// - 判断参数值是否传入
// - 使用上下文对象调用这歌方法并返回结果
// - 删除刚才新增的属性
// - 返回结果

Function.prototype.myApply = function(context) {
  if(typeof this !== 'function') throw new Error("invalid call");
  const context = context || window;  
  let result = null;
  const key = Symbol();  
  context[key] = this;
  if(arguments[1]) {
    result = context[key]([...arguments[1]]);
  } else {
    result = context[key]();
  }  
  delete context[key];
  return result;
}
