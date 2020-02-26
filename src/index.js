
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(!matrix) {
    return [];
  }

  return matrix.reduce((acc, cur) => {
    return !(matrix.indexOf(cur) % 2) ? acc.concat(cur) : acc.concat(cur.reverse());
  },[]);
};   
