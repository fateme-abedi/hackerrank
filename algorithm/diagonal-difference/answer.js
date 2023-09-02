function diagonalDifference(arr) {
    // Write your code here
    let primaryD=0;
    let secondaryD=0;
    
    for(let i=0; i<=arr.length-1 ; i++) {
        for(let j=0; j<=arr[i].length-1; j++){
            if(i===j){
                
                primaryD+=arr[i][j];
            }
            if(i+j === (arr.length-1)){
                console.log(arr[i][j]);
                secondaryD+=arr[i][j];
            }

        }
    }
    
    return Math.abs(primaryD-secondaryD);

}

//console.log(diagonalDifference([[11,2,4],[4,5,6],[10,8,-12]]));