function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let countApple = 0;
    let countOrange = 0;
    for (let i = 0; i < apples.length; i++) {
        apples[i] += a
        if (apples[i] >= s && apples[i] <= t)
            countApple++


    }
    for (let j = 0; j < oranges.length; j++) {
        oranges[j] += b
        if (oranges[j] >= s && oranges[j] <= t)
            countOrange++


    }
    console.log(countApple + "\n" + countOrange);
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6])