// 给你一个字符串 s，找到 s 中最长的回文子串。

// 示例 1：

// 输入：s = "babad"
// 输出："bab"
// 解释："aba" 同样是符合题意的答案。
// 示例 2：

// 输入：s = "cbbd"
// 输出："bb"
// 示例 3：

// 输入：s = "a"
// 输出："a"
// 示例 4：

// 输入：s = "ac"
// 输出："a"
//  
// 提示：
// 1 <= s.length <= 1000
// s 仅由数字和英文字母（大写和/或小写）组成

// 暴力
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if(s.length === 1) return s;
  let max = 0, begin = 0;
  for(let i = 0; i < s.length; i++) {
      for(let j = 0; j < s.length; j++) {
          if(isPal(s, i, j) && j-i+1 > max) {
              max = j-i+1;
              begin = i;
          }
      }
  }
  return s.substring(begin, begin+max);
};

function isPal(s, left, right) {
  while(left < right) {
      if(s.charAt(left) !== s.charAt(right)) {
          return false;
      }
      left ++;
      right --;
  }
  return true;
}

// 中心分散
/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
  if(!s || s.length == 0) return "";
  let start = 0, end = 0;
  let maxLen = 0;
  for(let i = 1; i < s.length; i++) {
      let len1 = helper(s, i, i);
      let len2 = helper(s, i-1, i);
      if(len1 > maxLen) {
          start = i - len1/2;
          end = i + len1/2;
          maxLen = len1;
      }
      if(len2 > maxLen) {
          start = i - len2/2;
          ebd = i-1 + len2/2;
          maxLen = len2;
      }
  }
  return s.substring(start, end+1);
};

function helper(s, left, right) {
  let maxLen = 1;
  while(left >= 0 && right < s.length && s.charAt(left) === s.charAt(right)) {
      maxLen = right - left + 1;
      left --;
      right ++;
  }
  return maxLen;
}

// 动态规划

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if(!s || s.length === 0) return "";
  let begin = 0, end = 0;
  let n = s.length;
  let dp = Array(n).fill().map(() => Array(n).fill(false));
  for(let len = 0; len < n; len++) {
      for(let i = 0; i+len < n; i++) {
          let j = i + len;
          if(len == 0) dp[i][j] = true;
          else if(len == 1) dp[i][j] = (s.charAt(i) === s.charAt(j));
          else dp[i][j] = dp[i+1][j-1] && s.charAt(i) === s.charAt(j);
          if(dp[i][j] && len > end-begin) {
              begin = i;
              end = j;
          }
      }
  }
  return s.substring(begin, end+1);
};