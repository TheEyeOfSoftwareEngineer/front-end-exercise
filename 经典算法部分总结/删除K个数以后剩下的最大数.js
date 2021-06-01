function findMax(m, k) {
  let arr = m.toString().split('');
  let len = arr.length;
  
  let start = 0, end = 1, count = 0;
  while(end < len && count != k) {
    if(arr[end] <= arr[start]) {
      //console.log(arr[end] + " " + arr[start]);
      ++start;
      arr[start] = arr[end];
      end++;
      //print(arr);
    } else {
      start --;
      count ++;
    }
  }
  while(end <= len) {
    arr[++start] = arr[end++];
  }

  let res = "";
  for(let i = 0; i < len-k; i++) {
    res += arr[i];
  }
  return parseInt(res);
}

function print(arr) {
  let res = "";
  for(let i = 0; i < arr.length; i++) {
    res += arr[i] + " ";
  }
  console.log(res);
}

console.log(findMax(98379513, 4));
