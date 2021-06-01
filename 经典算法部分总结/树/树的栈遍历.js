// 前序遍历

function preOrder(root) {
  if(!root) return;
  let stack = [];
  stack.push(root);
  while(stack.length > 0) {
    let node = stack.pop();
    console.log(node.val);
    node.right && stack.push(node.right);
    node.left && stack.push(node.left);
  }
}

//      4           [4]         4
//    /  \
//   2    6         [6, 2]      
//  / \   / \       [6, 3, 1]   4 2
//  1  3  5  7                  4 2 1 3 
//                  [6]   4 2 1 3 6 [7, 5]

// 中序遍历
function inOrder(root) {
  if(!root) return;
  let stack = [];  
  while(stack.length > 0 || root) {
    if(root) {
      stack.push(root);
      root = root.left;
    } else {
      root = stack.pop();
      console.log(root.val);
      root = root.right;
    }    
  }
}

// 后序遍历
function postOrder(root) {
  if(!root) return;
  let stack1 = [];
  let stack2 = [];
  stack1.push(root);
  while(stack1.length > 0) {
    root = stack1.pop();
    stack2.push(root);
    root.left && stack1.push(root.left);
    root.right && stack1.push(root.right);    
  }
  while(stack2.length > 0) {
    console.log(stack2.pop());
  }
}
// stack1 [4] [2, 6] [2, 5, 7] [2] [1, 3]
// stack2 []  [4]    [4, 6]    [4, 6, 7, 5] [4, 6, 7, 5, 2] [4, 6, 7, 5, 2, 3, 1]
 
//      4           
//    /  \
//   2    6         
//  / \   / \       
//  1  3  5  7