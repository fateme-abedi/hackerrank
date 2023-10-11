function getMoneySpent(keyboards, drives, b) {
  let max_spent = -1;
  for (let i = 0; i < keyboards.length; i++) {
    for (let j = 0; j < drives.length; j++) {
      if (keyboards[i] + drives[j] <= b) {
        max_spent = Math.max(max_spent, keyboards[i] + drives[j]);
      }
    }
  }

  return max_spent;
}
console.log(getMoneySpent([40, 50, 60],[5, 8, 12],60)); //output:58
