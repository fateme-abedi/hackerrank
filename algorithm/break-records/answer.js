function breakingRecords(scores) {
    let minScore = scores[0];
    let maxScore = scores[0];
    let minCount = 0;
    let maxCount = 0;
    
    for (let i = 1; i < scores.length; i++) {
        if (scores[i] < minScore) {
            minScore = scores[i];
            minCount++;
        } else if (scores[i] > maxScore) {
            maxScore = scores[i];
            maxCount++;
        }
    }
    
    return [maxCount, minCount];

}