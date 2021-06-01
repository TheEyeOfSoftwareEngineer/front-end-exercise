/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder = function(matrix) {
  let res = [];
  if(!matrix || matrix.length === 0) return res;
  let l = 0, // l
      r = matrix[0].length-1, // r
      t = 0, // t
      b = matrix.length-1; // b  
  while(true) {
      for(let i = l; i <= r; i++) {
          res.push(matrix[t][i]); 
      }
      if(++t > b) break;
      for(let i = t; i <= b; i++) {
          res.push(matrix[i][r]);
      }
      if(l > --r) break;
      for(let i = r; i >= l; i--) {
          res.push(matrix[b][i]);
      }
      if(t > --b) break;
      for(let i = b; i >= t; i--) {
          res.push(matrix[i][l]);
      }
      if(++l > r) break;
  }
  return res;

};

let inp = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];
let res = spiralOrder(inp);
console.log(res);
