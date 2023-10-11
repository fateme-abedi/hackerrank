function countingValleys(steps, path) {
  let altitude = 0;
  let valleys = 0;
  for (let i = 0; i < steps; i++) {
    if (path[i] === "U") {
      altitude++;
      if (altitude === 0) {
        valleys++;
      }
    } else {
      altitude--;
    }
  }
  
  return valleys;
}
