function bonAppetit(bill, k, b) {
  const totalBill = bill.reduce((acc, val) => acc + val, 0);
  const bActual = (totalBill - bill[k]) / 2;
  if (bActual === b) {
    console.log("Bon Appetit");
  } else {
    console.log(b - bActual);
  }
}

// -------------OR---------------------------

// function bonAppetit(bill, k, b) {
//   let sum = 0;
//   for (let i = 0; i < bill.length; i++) {
//     if (i !== k) sum += bill[i];
//   }
//   let bActual = sum / 2;
//   if (bActual === b) return "Bon Appetit";
//   else return b - bActual;
// }
console.log(bonAppetit([3, 10, 2, 9], 1, 7)); //output:Bon Appetit
