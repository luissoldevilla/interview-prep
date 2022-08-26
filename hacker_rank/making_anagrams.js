function makeAnagram(a, b) {
    // Write your code here
    let map = {}, aCount = 0, bCount = 0;
    for (let i = 0; i < a.length; i++) {
        if (!map[a[i]]) {
            map[a[i]] = 1;
        } else {
            map[a[i]] += 1;
        }
    }
    

    for (let j = 0; j < b.length; j++) {
        if (map[b[j]]) {
            aCount += 1;
            map[b[j]] -= 1;
        } else {
            bCount += 1
        }
    }
    console.log((a.length - aCount) + bCount);
    return ((a.length - aCount) + bCount);
}

makeAnagram('cde', 'abc')