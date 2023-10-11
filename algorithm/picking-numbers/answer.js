function pickingNumbers(a) {
  a.sort((x, y) => x - y);
  let maxCount = 0;
  for (let i = 0; i < a.length; i++) {
    let count = 1;
    for (let j = i + 1; j < a.length; j++) {
      if (Math.abs(a[j] - a[i]) <= 1) {
        count++;
      }
    }
    if (count > maxCount) {
      maxCount = count;
    }
  }

  return maxCount;
}
