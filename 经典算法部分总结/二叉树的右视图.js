// 给定一棵二叉树，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。

// 示例:
// 输入: [1,2,3,null,5,null,4]
// 输出: [1, 3, 4]
// 解释:

//    1            <---
//  /   \
// 2     3         <---
//  \     \
//   5     4       <---

// BFS
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
 * @return {number[]}
 */
var rightSideView = function(root) {
  let ans = [];
  if(!root) return ans;
  let queue = [];
  queue.push(root);
  while(queue.length > 0) {
      let n = queue.length;
      for(let i = 0; i < n; i++) {
          let node = queue.shift();
          if(node.left) {
              queue.push(node.left);
          }
          if(node.right) {
              queue.push(node.right);
          }
          if(i === n-1) {
              ans.push(node.val);
          }
      }
  }
  return ans;
};

// DFS
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
 * @return {number[]}
 */
var rightSideView = function(root) {
  let ans = [];
  dfs(root, 0, ans);
  return ans;
};

function dfs(root, depth, ans) {
  if(!root) return;
  if(depth === ans.length) {
      ans.push(root.val);
  }
  depth ++;
  dfs(root.right, depth, ans);
  dfs(root.left, depth, ans);
}