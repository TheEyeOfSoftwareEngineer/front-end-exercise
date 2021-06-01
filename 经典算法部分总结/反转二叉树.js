// 翻转一棵二叉树。

// 示例：

// 输入：

//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9
// 输出：

//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1
// 备注:
// 这个问题是受到 Max Howell 的 原问题 启发的 ：

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if(!root) return root;
  let left = invert(root.left);
  let right = invert(root.right);
  root.left = right;
  root.right = left;
  return root;
};

function invert(root) {
  if(!root) return root;
  let left = invert(root.left);
  let right = invert(root.right);
  root.left = right;
  root.right = left;
  return root;
}

// 递归
var mirrorTree = function(root) {
  if(!root) return null;
  let left = mirrorTree(root.left);
  let right = mirrorTree(root.right);
  root.left = right;
  root.right = left;
  return root;
};

// 栈方法
var mirrorTree = function(root) {
  if(!root) return null;
  let stack = [];
  stack.push(root);
  while(stack.length > 0) {
      let node = stack.pop();
      node.left && stack.push(node.left);
      node.right && stack.push(node.right);
      let left = node.left;
      node.left = node.right;
      node.right = left;
  }
  return root;
};