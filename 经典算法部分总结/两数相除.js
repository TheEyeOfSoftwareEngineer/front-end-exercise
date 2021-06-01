// 给定两个整数，被除数 dividend 和除数 divisor。将两数相除，要求不使用乘法、除法和 mod 运算符。
// 返回被除数 dividend 除以除数 divisor 得到的商。
// 整数除法的结果应当截去（truncate）其小数部分，例如：truncate(8.345) = 8 以及 truncate(-2.7335) = -2

// 示例 1:
// 输入: dividend = 10, divisor = 3
// 输出: 3
// 解释: 10/3 = truncate(3.33333..) = truncate(3) = 3

// 示例 2:
// 输入: dividend = 7, divisor = -3
// 输出: -2
// 解释: 7/-3 = truncate(-2.33333..) = -2

// 提示：
// 被除数和除数均为 32 位有符号整数。
// 除数不为 0。
// 假设我们的环境只能存储 32 位有符号整数，其数值范围是 [−231,  231 − 1]。本题中，如果除法结果溢出，则返回 231 − 1。

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
 var divide = function(dividend, divisor) {
  const MAX = Math.pow(2, 31) - 1,
        MIN = -Math.pow(2, 31);
  let a = dividend, 
      b = divisor;    
  let flag = 1;
  if((a>0&&b<0) || (a<0&&b>0)) {
      flag = -1;
  }
  a = Math.abs(a);
  b = Math.abs(b);
  let res = 0;
  if(b === 1) {
      res = a;
  } else {
      res = div(a, b);
  }
  res = flag === -1 ? -res : res;
  if(res > MAX || res < MIN) {
      return MAX;
  }
  return res;
};

function div(a, b) {
  let count = 1;
  if(a < b) return 0;
  let tb = b;
  while(tb + tb <= a) {
      tb += tb;
      count += count;
  }
  let n = div(a-tb, b);
  console.log("n", n);
  console.log("+", count);
  return count + n;
}

divide(10, 2);