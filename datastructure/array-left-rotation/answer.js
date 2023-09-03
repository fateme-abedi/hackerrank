function rotateLeft(d, arr) {
    const n = arr.length;
    const rotatedArr = [];
    for (let i = 0; i < n; i++) {
        const newIndex = (i + n - d) % n;
        rotatedArr[newIndex] = arr[i];
    }

    return rotatedArr;
}

//OR

//      function rotateLeft(d,arr){
//       let rotatedArr = [];
//       for(i=0; i < arr.length; i++){
//         let newIndex = i-d;
//         if(newIndex < 0){
//             newIndex = arr.length -d +i;
//         }
//         rotatedArr[newIndex] = arr[i];
//     }

//     return rotatedArr;
// }
 console.log(rotateLeft(2,[1,2,3,4,5]));  result:[3,4,5,1,2]
