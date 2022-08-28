function makeAnagram(a, b) {
    // Write your code here

    // declare a hashmap and two counter 
    let map = {}, aCount = 0, bCount = 0;

    // do loop for a
    for (let i = 0; i < a.length; i++) {
        // we populate our hash
        if (!map[a[i]]) {
            map[a[i]] = 1;
            // console.log(map[a[i]]);
        } else {
            map[a[i]] += 1;
        }
    }
    

    for (let j = 0; j < b.length; j++) {
        if (map[b[j]]) {
            aCount += 1;
            // console.log(aCount);
            map[b[j]] -= 1;
        } else {
            bCount += 1
            // console.log(bCount);
        }
    }

    let deletions = (a.length - aCount) + bCount;
    console.log(deletions);
    return deletions;
}

makeAnagram('cde', 'abc');
makeAnagram('edc', 'cba');
makeAnagram('edcg', 'cbak'); // third test - checking for other cases
makeAnagram('edcg', 'cbak'); // third test - checking for other cases