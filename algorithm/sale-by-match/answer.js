function sockMerchant(n, ar) {
  let pairs = 0;
  const colors = {};
  for (let i = 0; i < n; i++) {
    if (colors[ar[i]]) {
      colors[ar[i]]++;
    } else {
      colors[ar[i]] = 1;
    }
  }
  for (let color in colors) {
    pairs += Math.floor(colors[color] / 2);
  }

  return pairs;
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])); //output:3
