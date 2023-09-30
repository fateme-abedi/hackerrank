function miniMaxSum(arr) {
  let sum = arr.reduce((acc, curr) => acc + curr, 0);
  let minSum = sum - Math.max(...arr);
  let maxSum = sum - Math.min(...arr);
  console.log(minSum, maxSum);
}
