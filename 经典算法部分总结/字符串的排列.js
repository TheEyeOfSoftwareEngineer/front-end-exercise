// 输入一个字符串，打印出该字符串中字符的所有排列。

// 你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。

// 示例:

// 输入：s = "abc"
// 输出：["abc","acb","bac","bca","cab","cba"]

// 限制：

// 1 <= s 的长度 <= 8

/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function(s) {
  if(!s || s.length <= 1) return Array.from(s);
  let ans = new Set();
  let arr = s.split('').sort();
  dfs(arr, ans, Array(s.length).fill(false), []);
  return Array.from(ans);
};

function dfs(arr, ans, visited, path) {
  if(path.length === arr.length) {
      ans.add(path.join(''));
      return;
  }
  for(let i = 0; i < arr.length; i++) {
      if(visited[i]) continue;
      if(i >= 1 && arr[i] === arr[i-1] && !visited[i-1]) continue;
      visited[i] = true;
      path.push(arr[i]);
      dfs(arr, ans, visited, path);
      visited[i] = false;
      path.pop();
  }
}