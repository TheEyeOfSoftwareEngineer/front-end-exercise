// 输入一个整型数组，数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。

// 要求时间复杂度为O(n)。

//  

// 示例1:

// 输入: nums = [-2,1,-3,4,-1,2,1,-5,4]
// 输出: 6
// 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
//  
// 提示：

// 1 <= arr.length <= 10^5
// -100 <= arr[i] <= 100

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {    
  let dp = [];
  dp[0] = nums[0];
  let best = dp[0];
  for(let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i-1]+nums[i], nums[i]);
    best = Math.max(dp[i], best);
  }
  return best;
};