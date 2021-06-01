// 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。

// 提示：
// num1 和num2 的长度都小于 5100
// num1 和num2 都只包含数字 0-9
// num1 和num2 都不包含任何前导零
// 你不能使用任何內建 BigInteger 库， 也不能直接将输入的字符串转换为整数形式

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 var addStrings = function(num1, num2) {
  let res = "", carry = 0;
  let r1 = num1.length-1, r2 = num2.length-1;
  while(r1 >= 0 || r2 >= 0) {
      let n1 = r1 >= 0 ? parseInt(num1.charAt(r1)) : 0;
      let n2 = r2 >= 0 ? parseInt(num2.charAt(r2)) : 0;        
      let temp = n1 + n2 + carry;
      carry = Math.floor(temp / 10);
      res += (temp%10);
      r1 --;
      r2 --;
  }
  if(carry == 1) res += carry;
  return res.split('').reverse().join('');
};
