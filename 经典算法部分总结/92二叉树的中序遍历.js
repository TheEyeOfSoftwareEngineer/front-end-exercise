// 给定一个二叉树的根节点 root ，返回它的 中序 遍历。

// 示例 1：
// 输入：root = [1,null,2,3]
// 输出：[1,3,2]

// 示例 2：
// 输入：root = []
// 输出：[]

// 示例 3：
// 输入：root = [1]
// 输出：[1]

// 示例 4：
// 输入：root = [1,2]
// 输出：[2,1]

// 示例 5：
// 输入：root = [1,null,2]
// 输出：[1,2]
//  
// 提示：
// 树中节点数目在范围 [0, 100] 内
// -100 <= Node.val <= 100

// 递归
var inorderTraversal = function(root) {
  let res = [];
  if(!root) return res;
  dfs(root, res);
  return res;
};

function dfs(root, res) {
  if(!root) return;
  dfs(root.left, res);
  res.push(root.val);
  dfs(root.right, res);
}

// 迭代
var inorderTraversal = function(root) {
  let res = [];
  if(!root) return res;
  let stack = [];
  while(stack.length > 0 || root) {
      if(root) {
          stack.push(root);
          root = root.left;
      } else {
          root = stack.pop();
          res.push(root.val);
          root = root.right;
      }
  }
  return res;
};