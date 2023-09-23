function pageCount(n, p) {
  const fromFront = Math.floor(p / 2);
  const fromBack = Math.floor(n / 2 - fromFront);
  return Math.min(fromFront, fromBack);
}

// Binary Search:
// function pageCount(n, p) {
//   let start = 0;
//   let end = Math.floor(n / 2);
//   let result = -1;

//   while (start <= end) {
//     const mid = Math.floor((start + end) / 2);
//     const page = mid * 2 + 1;

//     if (page === p || page - 1 === p) {
//       result = mid;
//       break;
//     } else if (page < p) {
//       start = mid + 1;
//     } else {
//       end = mid - 1;
//     }
//   }

//   return result;
// }

console.log(pageCount(6, 2)); // Output: 1
