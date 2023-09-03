function reverseArray(ar) {
    let reversedArray = [];
    for (let i = ar.length-1; i >= 0; i--) {
        reversedArray.push(ar[i]);
    }
    
    return reversedArray;
}


// -----------OR-------------
//   function reverseArray(ar){
//     let reversedArray = ar.reverse();
//     return reversedArray;
// }

let array=reverseArray([1,2,3,4,5])
console.log(array);
