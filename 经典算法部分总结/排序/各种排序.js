// 快速排序

// - 写法1
function sortArray(arr) {
  return quickSort1(arr);
}

function quickSort1(arr) {
  let pivot = arr[0];
  let left = [],
      right = [];
  for(let i = 1; i < arr.length; i++) {
    if(arr[i] <= pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }    
  return quickSort1(left).concat([pivot], quickSort1(right));
}

// - 写法2
function sortArray(arr) {
  return quickSort2(arr, 0, arr.length-1);
}

function quickSort2(arr, left, right) {
  if(left > right) return;
  let pivotId = partition(arr, left, right);
  quickSort2(arr, left, pivotId-1);
  quickSort2(arr, pivotId+1, right);
  return arr;
}

function partition(arr, left, right) {
  let pivot = arr[right];
  let leftId = left;
  for(let i = left; i < right; i++) {
    if(arr[i] < pivot) {
      [arr[i], arr[leftId]] = [arr[leftId], arr[i]];
      leftId ++;
    }
  }
  [arr[leftId], arr[right]] = [arr[right], arr[leftId]];
  return leftId;
}
// [5,2,3,4] -> [2, 3, 4, 5] 
// [2, 3] + [5]

// 冒泡排序
function sortArray(arr) {
  for(let i = 0; i < arr.length-1; i++) {
    for(let j = 0; j < arr.length-1-i; j++) {
      if(arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
      }
    }
  }
  return arr;
}
// [5, 2, 3, 1]

// 归并排序
// - 写法1
function sortArray(arr) {
  return mergeSort(arr);
}

function mergeSort(arr) {
  if(arr.length < 2) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid),
      right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let res = [];
  while(left.length && right.length) {
    if(left[0] < right[0]) {
      res.push(left.shift());
    } else {
      res.push(right.shift());
    }
  }
  return [...res, ...left, ...right];
}
// - 写法2


// 选择排序
var sortArray = function(nums) {
  for(let i = 0; i < nums.length; i++) {
      let minId = i;
      let min = nums[i];
      for(let j = i; j < nums.length; j++) {
          if(nums[j] < min) {
              minId = j;
              min = nums[j];                
          }
      }        
      [nums[i], nums[minId]] = [nums[minId], nums[i]];
  }
  return nums;
};

// 插入排序
// [5, 2, 3, 1]
var sortArray = function(nums) {
  for(let i = 1; i < nums.length; i++) {
      let tmp = nums[i];
      let j = i-1;
      for( ; j>=0; j--) {
          if(tmp >= nums[j]) break;
          nums[j+1] = nums[j];
      }
      nums[j+1] = tmp;
  }
  return nums;
};