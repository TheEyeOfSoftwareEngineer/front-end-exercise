// ajax

// 创建ajax请求的步骤
// 1. 创建XMLHttpRequest对象
// 2. 这个对象使用open方法创建一个HTTP请求，open方法所需要的参数是请求的方法，请求的地址，是否异步和用户的认证信息
// 3. 在发起请求之前，可以对这个对象添加一些信息和监听函数。如可以通过setRequestHeader方法来为请求添加头信息。还可以为这个对象添加一个状态监听函数。一个XMLHttpRequest对象一共5个状态，当它状态变化时会触发onreadystatechange事件，可以通过设置监听函数来处理请求成功后的结果。当对象的readyState变为4的时候，代表服务器返回的数据接收完成，这个时候可以判断请求的状态。如果状态是2xx或者304的话则代表返回正常。此时可以通过response中的数据来对页面开始更新。
// 4. 当对象的属性和监听函数设置完成后，最后调用sent方法来向服务器发起请求，可以传入参数作为发送的数据体

let xhr = new XMLHttpRequest();
xhr.open('GET', url, true); //true异步
xhr.setRequestHeader('Accept', 'application/json');
xhr.onreadystatechange = function() {
  if(xhr.readyState !== 4) return;
  if(xhr.status === 200 || xhr.status === 304) {
    handle(this.response);    
  } else {
    console.error(this.statusText);
  }
}

xhr.onerror = function() {
  console.error(this.statusText);
}

xhr.responseType = "json";
xhr.send(null);