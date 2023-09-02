function compare(a, b) {
    let aliceScore = 0;
    let bobScore = 0;
    for (let i = 0; i < a.length; i++) {
      if (a[i] > b[i]) {
        aliceScore++;
      } else if (a[i] < b[i]) {
        bobScore++;
      }
    }
    return [aliceScore, bobScore];
  }

//  console.log(compareTriplets([5 ,6, 7], [3,6,10]));  result:[1 1 ]