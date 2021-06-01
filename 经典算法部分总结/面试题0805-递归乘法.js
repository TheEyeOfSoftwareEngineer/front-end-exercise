// 递归乘法。 写一个递归函数，不使用 * 运算符， 实现两个正整数的相乘。可以使用加号、减号、位移，但要吝啬一些。

// 示例1:
// 输入：A = 1, B = 10
// 输出：10

// 示例2:
// 输入：A = 3, B = 4
// 输出：12

// 提示:
// 保证乘法范围不会溢出

/**
 * @param {number} A
 * @param {number} B
 * @return {number}
 */
 var multiply = function(A, B) {
  if(A === 0 || B === 0) return 0;
  if(A > B) {
      return A + multiply(A, B-1);
  }
  return B + multiply(A-1, B);
};



/**
 * @param {number} A
 * @param {number} B
 * @return {number}
 */
 var multiply = function(A, B) {
  let min = Math.min(A, B);
  let max = Math.max(A, B);
  let ans = 0;

  for(let i = 0; min != 0; i++) {
      if((min & 1) === 1) {
          ans += (max << i);
      }
      min >>= 1;
  }
  return ans;
};