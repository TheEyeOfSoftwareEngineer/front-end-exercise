class EventEmitter {
  constructor() {
    this.events = this.events || new Map();    
  }
  // 监听事件
  on(type, fn) {
    if(!this.events.get(type)) {
      this.events.set(type, fn);
    }
  }
  // 触发事件
  emit(type) {
    let handle = this.events.get(type);
    handle.apply(this, [...arguments].slice(1));
  }
}

let emitter = new EventEmitter();
emitter.on('ages', age => {
  console.log(age);
})
emitter.emit('ages', 10);
