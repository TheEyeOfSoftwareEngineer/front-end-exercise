// 请从字符串中找出一个最长的不包含重复字符的子字符串，计算该最长子字符串的长度。

//  

// 示例 1:

// 输入: "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
// 示例 2:

// 输入: "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
// 示例 3:

// 输入: "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
//  

// 提示：

// s.length <= 40000

/**
 * @param {string} s
 * @return {number}
 */

// abcabccbb
// map: a:1 b:2 c:3

var lengthOfLongestSubstring = function(s) {
  let n = s.length, ans = 0;
  const map = new Map();
  for(let start = 0, end = 0; end < n; end++) {
      let alpha = s.charAt(end);
      if(map.has(alpha)) {
          start = Math.max(map.get(alpha), start);
      }
      ans = Math.max(ans, end-start+1);
      map.set(alpha, end+1);
  }
  return ans;
};