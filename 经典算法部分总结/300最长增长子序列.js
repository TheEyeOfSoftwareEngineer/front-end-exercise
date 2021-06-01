// 给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。

// 子序列是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。
//  
// 示例 1：
// 输入：nums = [10,9,2,5,3,7,101,18]
// 输出：4
// 解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。

// 示例 2：
// 输入：nums = [0,1,0,3,2,3]
// 输出：4

// 示例 3：
// 输入：nums = [7,7,7,7,7,7,7]
// 输出：1
//  

// 提示：
// 1 <= nums.length <= 2500
// -104 <= nums[i] <= 104
//  
// 进阶：
// 你可以设计时间复杂度为 O(n2) 的解决方案吗？
// 你能将算法的时间复杂度降低到 O(n log(n)) 吗?

// 动态规划
/**
 * @param {number[]} nums
 * @return {number}
 */
 var lengthOfLIS = function(nums) {
  if(nums.length == 0) {
      return 0;
  }
  // 表示第i位置结尾的最长递增子序列
  let dp = Array(nums.length).fill(0);
  dp[0] = 1;
  let ans = 1;
  for(let i = 1; i < nums.length; i++) {
      dp[i] = 1;
      for(let j = 0; j < i; j++) {
          if(nums[j] < nums[i]) {
              dp[i] = Math.max(dp[i], dp[j]+1);
          }
      }
      ans = Math.max(ans, dp[i]);
  }
  return ans;
};

// 贪心和二分
/**
 * @param {number[]} nums
 * @return {number}
 */
 var lengthOfLIS = function(nums) {
  let len = 1, n = nums.length;
  if(n == 0) {
      return 0;
  }
  let d = Array(n+1).fill(0);
  d[len] = nums[0];
  for(let i = 1; i < n; ++i) {
      if(nums[i] > d[len]) {
          d[++len] = nums[i];
      } else {
          let l = 1, r = len, pos = 0;
          while(l <= r) {
              let mid = l + Math.floor((r-l)/2);
              if(d[mid] < nums[i]) {
                  pos = mid;
                  l = mid + 1;
              } else {
                  r = mid - 1;
              }
          }
          d[pos+1] = nums[i];
      }
  }
  return len;
};

// 结合二分
/**
 * @param {number[]} nums
 * @return {number}
 */
 var lengthOfLIS = function(nums) {
  let maxL = 0;
  let dp = Array(nums.length).fill(0);
  for(let num of nums) {
      let l = 0,
          r = maxL;
      while(l < r) {
          let mid = l + Math.floor((r-l)/2);
          if(dp[mid] < num) {
              l = mid + 1;
          } else {
              r = mid;
          }
      }
      dp[l] = num;
      if(l === maxL) {
          maxL ++;
      }
  }
  return maxL;
};
