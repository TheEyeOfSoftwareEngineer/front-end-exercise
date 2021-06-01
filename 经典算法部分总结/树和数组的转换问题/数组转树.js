let arr =[
  {id:2,name:'部门B',parentId:0},
  {id:3,name:'部门C',parentId:1},
  {id:1,name:'部门A',parentId:2},
  {id:4,name:'部门D',parentId:1},
  {id:5,name:'部门E',parentId:2},
  {id:6,name:'部门F',parentId:3},
  {id:7,name:'部门G',parentId:2},
  {id:8,name:'部门H',parentId:4}
];
/**
* 数组转树  非递归求解
* 利用数组和对象相互引用  时间复杂度O(n)
* @param {Object} list
*/
function totree(list,parId) {
  let obj = {};
  let result = [];
  //将数组中数据转为键值对结构 (这里的数组和obj会相互引用)
  list.map(el => {
      obj[el.id] = el;
  })
  for(let i=0, len = list.length; i < len; i++) {
      let id = list[i].parentId;
      if(id == parId) {
          result.push(list[i]);
          continue;
      }
      if(obj[id].children) {
          obj[id].children.push(list[i]);
      } else {
          obj[id].children = [list[i]];
      }
  }
  return result;
}

let res1 = totree(arr,0)
console.log(res1)

/**
* 数组转树  递归求解
*/
function toTree(list,parId){
let len = list.length
function loop(parId){
  let res = [];
  for(let i = 0; i < len; i++){
    let item = list[i]
    if(item.parentId === parId){
      item.children = loop(item.id)
      res.push(item)
    }
  }
  return res
}
return loop(parId)
}

let result = toTree(arr,0)
console.log(result)