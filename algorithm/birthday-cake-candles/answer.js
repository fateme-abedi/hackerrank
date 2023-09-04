function birthdayCakeCandles(candles) {
  let maxCandle = Math.max(...candles);
  let countMaxCandle = 0;
  candles.forEach((candle) => {
    if (candle === maxCandle) countMaxCandle++;
  });

  return countMaxCandle;
}
console.log(birthdayCakeCandles([44, 53, 31, 27, 77, 60, 66, 77, 26, 36]));
