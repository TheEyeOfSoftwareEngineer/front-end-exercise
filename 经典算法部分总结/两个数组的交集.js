// 给定两个数组，编写一个函数来计算它们的交集。

// 示例 1：
// 输入：nums1 = [1,2,2,1], nums2 = [2,2]
// 输出：[2]

// 示例 2：
// 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// 输出：[9,4]

// 说明：
// 输出结果中的每个元素一定是唯一的。
// 我们可以不考虑输出结果的顺序。

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {    
  const len1 = nums1.length, len2 = nums2.length;
  nums1.sort((a, b) => a-b);
  nums2.sort((a, b) => a-b);
  let res = [];
  let idx1 = 0, idx2 = 0;
  while(idx1 < len1 && idx2 < len2) {
      const num1 = nums1[idx1], num2 = nums2[idx2];
      if(num1 === num2) {
          if(!res.length || num1 !== res[res.length-1]) {
              res.push(num1);                
          } 
          idx1++;
          idx2++;
      } else if(num1 < num2) {
          idx1++;
      } else {
          idx2++;
      }
  }
  return res;    
};

var intersection = function(nums1, nums2) {
  const set2 = new Set(nums2);
  return [...new Set(nums1)].filter(item => set2.has(item));
};