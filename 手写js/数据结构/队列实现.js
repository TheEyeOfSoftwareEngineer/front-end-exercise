// 一般队列
function Queue() {
  var items = [];
  
  this.enqueue = function(element) {
      items.push(element);
  }
  
  this.dequeue = function() {
      return items.shift();
  }
  
  this.front = function() {
      return items[0];
  }
  
  this.isEmpty = function() {
      return items.length === 0;
  }
  
  this.clear = function() {
      items = [];
  }
  
  this.size = function() {
      return items.length;
  }
  
  this.print = function() {
      console.log(items.toString());
  }
}

// 一般队列使用
var queue = new Queue();
console.log(queue.isEmpty()); // 输出 true
queue.enqueue('John');        // 添加元素 John
queue.enqueue('Jam');         // 添加元素 Jam
queue.enqueue('Camila');      // 添加元素 Camila
queue.print();
console.log(queue.size);      // 输出 3
console.log(queue.isEmpty);   // 输出 false
queue.dequeue();              // 移除元素
queue.dequeue();            
queue.print();

// 优先队列
function PriorityQueue() {
  var items = [];
  
  // {1}
  function QueueElement(element, priority) {
      this.element = element;
      this.priority = priority;
  }
  
  this.enqueue = function(element, priority) {
      var queueElement = new QueueElement(element, priority);
      
      if(this.isEmpty()) {
          items.push(queueElement);  // {2}
      } else {
          let added = false;
          for(let i = 0; i < items.length; i++) {
              if(queueElement.priority < items[i].priority) {
                  items.splice(i, 0, queueElement);    // {3}
                  added = true;
                  break;
              }
          }
          if(!added) {    // {4}
              items.push(queueElement);
          }
      }
  }
  
  // 其他方法与默认队列一样
}

// 优先队列使用
var priorityQueue = new PriorityQueue();
priorityQueue.enqueue('John', 2);
priorityQueue.enqueue('Jam', 1);
priorityQueue.enqueue('Sam', 1);
priorityQueue.print();

// 循环队列击鼓传花
function hotPotato(namelist, num) {
  var queue = new Queue();
  for (var i = 0; i < namelist.length; i++) {     // {1}
      queue.enqueue(namelist[i]);
  }
  var eliminated = "";
  while (queue.size() > 1) {                 // {2}
      for (var i = 0; i < num; i++) {
          queue.enqueue(queue.dequeue());    // {3}
      }
      eliminated = queue.dequeue();    // {4}
      console.log(eliminated + "在击鼓传花游戏中被淘汰");
  }
  return queue.dequeue();    // {5}
}
var names = ['john', 'jack', 'camila', 'ingrid', 'carl'];
var winner = hotPotato(names, 7);
console.log("胜利者： " + winner);      //john