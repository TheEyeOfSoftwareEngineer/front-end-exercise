let tree = [
  {
    id: 1,
    name: 'text1',
    parentId: 1,
    children: [
      {
        id: 2,
        name: 'text2',
        parentId: 1,
        children: [
          {
            id: 4,
            name: 'text4',
            parentId: 2
          }
        ]
      },
      {
        id: 3,
        name: 'text3',
        parentId: 1
      }
    ]
  }
]
/**
 * 树转数组扁平化结构   
 * 深度优先遍历  堆栈  后进先出
 */
function deep(node){
	let stack = node,
		data = [];
	while(stack.length != 0){
		let pop = stack.pop();
		data.push({
			id: pop.id,
			name: pop.name,
			parentId: pop.parentId
		})
		let children = pop.children
		if(children){
			for(let i = children.length-1; i >=0; i--){
				stack.push(children[i])
			}
		}
	}
	return data
}
console.log(deep(res1))

/**
 * 树转数组扁平化结构   
 * 深度优先遍历  递归
 */
function deepTraversal(data) {
    const result = [];
    data.forEach(item => {
        const loop = data => {
            result.push({
            	id: data.id,
				name: data.name,
				parentId: data.parentId
            });
            let child = data.children
            if(child){
            	for(let i = 0; i < child.length; i++){
					loop(child[i])
				}
            }
        }
        loop(item);
    })
    return result;
}
console.log(deepTraversal(res1))

/**
 * 广度优先
 * 队列  先进先出
 */
function wideTraversal(node){
	let stack = node,
		data = [];
	while(stack.length != 0){
		let shift = stack.shift();
		data.push({
			id: shift.id,
			name: shift.name,
			parentId: shift.parentId
		})
		let children = shift.children
		if(children){
			for(let i = 0; i < children.length; i++){
				stack.push(children[i])
			}
		}
	}
	return data
}
console.log(wideTraversal(res1))
