function staircase(n) {
    for(let i=1; i<=n ;i++){
       const space=" ".repeat(n-i)
       const hashtag="#".repeat(i)
       console.log(space+hashtag);
   }

}

staircase(6)