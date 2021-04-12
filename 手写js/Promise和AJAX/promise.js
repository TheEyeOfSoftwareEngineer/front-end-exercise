// 手写promise

// then 需要支持链式调用，所以得返回一个新的 Promise；
// 处理异步问题，所以得先用 onResolvedCallbacks 和 onRejectedCallbacks 分别把成功和失败的回调存起来；
// 为了让链式调用正常进行下去，需要判断 onFulfilled 和 onRejected 的类型；
// onFulfilled 和 onRejected 需要被异步调用，这里用 setTimeout 模拟异步；
// 处理 Promise 的 resolve；

const PENDING = "pending";
const RESOLVED = "resolved";
const REJECTED = "rejected";

function myPromise(fn) {
  // 保存初始化状态
  let self = this;
  // 初始化状态
  this.state = PENDING;
  // 用于保存resolve或者rejected传入的值
  this.value = null;
  // 用于保存resolve的回调函数
  this.resolvedCallbacks = [];
  // 用于保存reject的回调函数
  this.rejectedCallbacks = [];
  // 状态转变为resolved方法
  function resolve(value) {
    // 判断传入元素是否为primise值，如果是则状态改变必须等待前一个状态改变后在进行改变
    if(value instanceof myPromise) {
      return value.then(resolve, reject);
    }
    // 保证代码的执行顺序为本轮时间循环的末尾
    setTimeout(() => {
      // 只有转台为pending时才能转变
      if(self.state === PENDING) {
        self.state = RESOLVED;
        self.value = value;
        // 执行回调函数
        self.resolvedCallbacks.forEach(callback => {
          callback(value);
        })
      }
    }, 0);
  }
  // 状态转变为rejected方法
  function reject(value) {
    setTimeout(() => {
      if(self.state === PENDING) {
        self.state = REJECTED;
        self.value = value;
        self.rejectedCallbacks.forEach(callback => {
          callback(value);
        })
      }
    }, 0);
  }

  try {
    fn(resolve, reject);
  } catch (e) {
    reject(e);
  }
}

// 基础版本
// 三个状态：PENDING、FULFILLED、REJECTED
const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';

class Promise {
  constructor(executor) {
    // 默认状态为 PENDING
    this.status = PENDING;
    // 存放成功状态的值，默认为 undefined
    this.value = undefined;
    // 存放失败状态的值，默认为 undefined
    this.reason = undefined;

    // 调用此方法就是成功
    let resolve = (value) => {
      // 状态为 PENDING 时才可以更新状态，防止 executor 中调用了两次 resovle/reject 方法
      if(this.status ===  PENDING) {
        this.status = FULFILLED;
        this.value = value;
      }
    } 

    // 调用此方法就是失败
    let reject = (reason) => {
      // 状态为 PENDING 时才可以更新状态，防止 executor 中调用了两次 resovle/reject 方法
      if(this.status ===  PENDING) {
        this.status = REJECTED;
        this.reason = reason;
      }
    }

    try {
      // 立即执行，将 resolve 和 reject 函数传给使用者  
      executor(resolve,reject)
    } catch (error) {
      // 发生异常时执行失败逻辑
      reject(error)
    }
  }

  // 包含一个 then 方法，并接收两个参数 onFulfilled、onRejected
  then(onFulfilled, onRejected) {
    if (this.status === FULFILLED) {
      onFulfilled(this.value)
    }

    if (this.status === REJECTED) {
      onRejected(this.reason)
    }
  }
}

const promise = new Promise((resolve, reject) => {
  resolve('成功');
}).then(
  (data) => {
    console.log('success', data)
  },
  (err) => {
    console.log('faild', err)
  }
)

// 改进版
const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';

class Promise {
  constructor(executor) {
    this.status = PENDING;
    this.value = undefined;
    this.reason = undefined;
    // 存放成功的回调
    this.onResolvedCallbacks = [];
    // 存放失败的回调
    this.onRejectedCallbacks= [];
  
    let resolve = (value) => {
      if(this.status ===  PENDING) {
        this.status = FULFILLED;
        this.value = value;
        // 依次将对应的函数执行
        this.onResolvedCallbacks.forEach(fn=>fn());
      }
    } 

    let reject = (reason) => {
      if(this.status ===  PENDING) {
        this.status = REJECTED;
        this.reason = reason;
        // 依次将对应的函数执行
        this.onRejectedCallbacks.forEach(fn=>fn());
      }
    }

    try {
      executor(resolve,reject)
    } catch (error) {
      reject(error)
    }
  }

  then(onFulfilled, onRejected) {
    if (this.status === FULFILLED) {
      onFulfilled(this.value)
    }

    if (this.status === REJECTED) {
      onRejected(this.reason)
    }

    if (this.status === PENDING) {
      // 如果promise的状态是 pending，需要将 onFulfilled 和 onRejected 函数存放起来，等待状态确定后，再依次将对应的函数执行
      this.onResolvedCallbacks.push(() => {
        onFulfilled(this.value)
      });

      // 如果promise的状态是 pending，需要将 onFulfilled 和 onRejected 函数存放起来，等待状态确定后，再依次将对应的函数执行
      this.onRejectedCallbacks.push(()=> {
        onRejected(this.reason);
      })
    }
  }
}
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('成功');
  },1000);
}).then(
  (data) => {
    console.log('success', data)
  },
  (err) => {
    console.log('faild', err)
  }
)



