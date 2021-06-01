// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
//  
// 示例 1：
// 输入：s = "()"
// 输出：true

// 示例 2：
// 输入：s = "()[]{}"
// 输出：true

// 示例 3：
// 输入：s = "(]"
// 输出：false

// 示例 4：
// 输入：s = "([)]"
// 输出：false

// 示例 5：
// 输入：s = "{[]}"
// 输出：true
//  
// 提示：
// 1 <= s.length <= 104
// s 仅由括号 '()[]{}' 组成

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];
  for(let i = 0; i < s.length; i++) {
      const alpha = s.charAt(i);
      if(alpha === '(' || alpha === '{' || alpha === '[') {
          stack.push(alpha);
      } else {
          if(alpha === ')' && stack[stack.length-1]  !== '(') {
              return false;
          }
          if(alpha === '}' && stack[stack.length-1]  !== '{') {
              return false;
          }
          if(alpha === ']' && stack[stack.length-1]  !== '[') {
              return false;
          }
          stack.pop();
      }
  }
  return stack.length === 0;
};


/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const map = new Map();
  map.set(')', '(');
  map.set(']', '[');
  map.set('}', '{');    
  const stack = [];    
  for(let i = 0; i < s.length; i++) {
      const alpha = s.charAt(i);
      if(alpha === '(' || alpha === '{' || alpha === '[') {
          stack.push(alpha);
      } else {
          let top = stack.length-1;
          if(alpha === ')' && stack[top]  !== map.get(alpha)) {
              return false;
          }
          if(alpha === '}' && stack[top]  !== map.get(alpha)) {
              return false;
          }
          if(alpha === ']' && stack[top]  !== map.get(alpha)) {
              return false;
          }
          stack.pop();
      }
  }
  return stack.length === 0;
};