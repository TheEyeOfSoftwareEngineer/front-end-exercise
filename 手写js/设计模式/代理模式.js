let star = {
  name: 'xxx',
  age: 25,
  phone: '111111111'
}

let agent = new Proxy(star, {
  get: function(target, key) {
    if(key === 'phone') {
      // 保护原本的数据
      return '222222222';
    }
    // 目标数据不具备的属性
    if(key === 'price') {
      return 200000;
    }
    return target[key];
  },
  set: function(target, key, val) {
    if(key === 'customPrice') {
      if(val < 100000) {
        throw new Error('价格过低');
      } else {
        target[key] = val;
        return true;
      }

    }
  }
})

// 主办方
console.log(agent.name)
console.log(agent.age)
console.log(agent.phone)
console.log(agent.price)

// 想自己提供报价（砍价，或者高价争抢）
agent.customPrice = 150000
//agent.customPrice = 90000  // 报错：价格太低
console.log('customPrice', agent.customPrice)