function dynamicArray(n, queries) {
    let seqList = [];
    for (let i = 0; i < n; i++) {
      seqList.push([]);
    }
    let lastAnswer = 0;
    let result = [];
    for (let i = 0; i < queries.length; i++) {
      let [queryType, x, y] = queries[i].split(' ').map(Number);
      let index = (x ^ lastAnswer) % n;
      if (queryType === 1) {
        seqList[index].push(y);
      } else if (queryType === 2) {
        let seq = seqList[index];
        lastAnswer = seq[y % seq.length];
        result.push(lastAnswer);
      }
    }
    return result;
  }
  //const n = 2;
  //const queries = ['1 0 5', '1 1 7', '1 0 3', '2 1 0', '2 1 1'];
  //consol.log(dynamicArray(n, queries))   
  //result: [7, 3]