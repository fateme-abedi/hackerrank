function timeConversion(s) {
  let hours = parseInt(s.substring(0, 2));
  let ampm = s.substring(8);
  if (ampm === "PM" && hours !== 12) {
    hours += 12;
  } else if (ampm === "AM" && hours === 12) {
    hours = 0;
  }
  let militaryTime = hours.toString().padStart(2, "0") + s.substring(2, 8);

  return militaryTime;
}

console.log(timeConversion("07:05:45PM")); //output: '19:05:45'
