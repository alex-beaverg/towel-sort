
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === [] || matrix === undefined) return [];
  let result = matrix;
  let halfRes = []; 
  for (let i = 1; i < matrix.length; i += 2) {
        for (let num of matrix[i]) {
        halfRes.unshift(num);
    }
    result[i] = halfRes;
    halfRes = [];
  } 
  
  return result.flat();
}
