/**
 * @param {number} N
 * @return {number}
 */
 var consecutiveNumbersSum = function(N) {
  let ans = 0;
  for(let start = 1; start <= N; start++) {
      let target = N, x = start;
      while(target > 0) {
          target -= x++;
      }
      if(target === 0) ans ++;
  }
  return ans;
};


/**
 * @param {number} N
 * @return {number}
 */
 var consecutiveNumbersSum = function(N) {
  let ans = 0;
  for(let k = 1; k <= 2*N; k++) {
      if(2*N % k === 0) {
          let x = 2*N/k - k - 1;
          if(x % 2 === 0 && x >= 0) {
              ans ++;
          }
      }
  }
  return ans;
};


var consecutiveNumbersSum = function(N) {
  let ans = 0;
  for(let i = 1; i < Math.sqrt(2*N); i++) {
      if((N - i*(i+1)/2) % i === 0) ans++;
  }
  return ans;
};