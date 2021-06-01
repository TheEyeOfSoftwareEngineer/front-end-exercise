// 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。

// 你可以假设数组是非空的，并且给定的数组总是存在多数元素。

// 示例 1:
// 输入: [1, 2, 3, 2, 2, 2, 5, 4, 2]
// 输出: 2
//  
// 限制：

// 1 <= 数组长度 <= 50000

// 使用 map
/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
  let n = nums.length;
  const map = new Map();
  for(let i = 0; i < nums.length; i++) {
      if(map.has(nums[i])) {
          map.set(nums[i], map.get(nums[i])+1);
      } else {
          map.set(nums[i], 1);
      }        
  }
  for(let key of map.keys()) {        
      if(map.get(key) > Math.floor(n/2)) {
          return key;
      }
  }
  return -1;
};

// 使用众数
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let x = 0, votes = 0;
  for(let num of nums) {
      if(votes == 0) x = num;
      votes += num == x ? 1 : -1;
  }
  return x;
};