function migratoryBirds(arr) {
    // Write your code here
    
    const birdCounterObj = {};
    
    for (let i = 0; i < arr.length; i++) {
    if (birdCounterObj[arr[i]]) {
    birdCounterObj[arr[i]]++;
    } else {
    birdCounterObj[arr[i]] = 1;
    }
    }
    
    const maxSeenBirds = [];
    
    const sorted = Object.entries(birdCounterObj).sort((curr, next) => {
    if (next[1] !== curr[1]) return next[1] - curr[1];
    else curr[0] - next[0];
    });
    
    return sorted[0][0];
    }
    
    migratoryBirds([2, 4, 3, 2, 2, 3, 1, 2, 1, 3, 3]);