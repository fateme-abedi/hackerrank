function dayOfProgrammer(year) {
  let day = 256;
  if (year == 1918) {
    return "26.09.1918";
  } else if (
    (year <= 1917 && year % 4 == 0) ||
    (year > 1918 && (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)))
  ) {
    day -= 244;
  } else {
    day -= 243;
  }
  return `${day}.09.${year}`;
}
console.log(dayOfProgrammer(2017)); //output:13.09.2017
