// 事件委托(event delegation)

// Make a list
var ul = document.createElement('ul');
document.body.appendChild(ul);

var li1 = document.createElement('li');
var li2 = document.createElement('li');
ul.appendChild(li1);
ul.appendChild(li2);

function hide(e){
  // e.target 引用着 <li> 元素
  // 不像 e.currentTarget 引用着其父级的 <ul> 元素.
  e.target.style.visibility = 'hidden';
}

// 添加监听事件到列表，当每个 <li> 被点击的时候都会触发。
ul.addEventListener('click', hide, false);