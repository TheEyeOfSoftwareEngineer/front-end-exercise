// 在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

// 示例 1:

// 输入: [3,2,1,5,6,4] 和 k = 2
// 输出: 5
// 示例 2:

// 输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
// 输出: 4
// 说明:

// 你可以假设 k 总是有效的，且 1 ≤ k ≤ 数组的长度。

// 快排
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  return quickSort(nums, 0, nums.length-1, nums.length-k);
};

function quickSort(nums, left, right, k) {
  
  if(left > right) return;
  let mid = partition(nums, left, right);    
  if(mid === k) {        
      return nums[mid];
  } else if(mid > k) {
      return quickSort(nums, 0, mid-1, k);
  } else {
      return quickSort(nums, mid+1, right, k);
  }
}

function partition(nums, left, right) {
  
  let pivot = nums[right];
  let leftId = left;
  for(let i = left; i < right; i++) {
      if(nums[i] < pivot) {
          [nums[i], nums[leftId]] = [nums[leftId], nums[i]];
          leftId ++;
      }
  }
  [nums[right], nums[leftId]] = [nums[leftId], nums[right]];
  return leftId;
}

// 排序
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  nums.sort((a, b) => a-b);
  
  return nums[nums.length-k];
};
