function kangaroo(x1, v1, x2, v2) {
  if (v2 > v1) {
    return "NO";
  } else if ((x2 - x1) % (v1 - v2) === 0) {
    return "YES";
  } else {
    return "NO";
  }
}
console.log(kangaroo(0, 2, 5, 3)); //output:No
