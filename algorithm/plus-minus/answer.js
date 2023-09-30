function plusMinus(arr) {
  let positiveValues = 0;
  let negativeValues = 0;
  let zeros = 0;
  arr.forEach((item) => {
    if (item > 0) positiveValues++;
    else if (item < 0) negativeValues++;
    else zeros++;
  });
  [positiveValues, negativeValues, zeros].forEach((item) => {
    console.log((item / arr.length).toFixed(6));
  });
}

plusMinus([-4, 3, -9, 0, 4, 1]); //output 0.500000 0.333333 0.166667
