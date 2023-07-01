// Validate Subsequence

// Find a subsequence for the given array:
// Return a either True or Fals


//  First Solution  
// O(n) Time 
// O(1) Space - Where n is the length of the array

function isValidSubsequence(array, sequence) {
    // we set up counters
    let arr = 0;
    let sub = 0;
    // we set up a  while loop 
    while (arr < array.length && sub < sequence.length) {
        // console.log(array[arr])
        if (array[arr] === sequence[sub]) {
            sub++
            arr++
        }
        console.log(sub)
        return sub === sequence.length
    }
}

isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10])
isValidSubsequence([5, 1, 22, 25, 6, 10], [1, 6, -1, 10])
isValidSubsequence([5, 1, 22, 6, 10], [1, 6, -1, 10])

// Second solution
// O(n) Time 
// O(1) Space - Where n is the length of the array
function isValidSubsequence2(array, sequence) {
    let seqIdx = 0;
    // Set up a for loop that iterates through array 
    //  while declaring a constant named value
    for (const value of array) {
        console.log(value)
        if (seqIdx === sequence.length) break;
        if (sequence[seqIdx] === value) {
            seqIdx++;
        }
    }
    console.log(seqIdx)
    console.log(seqIdx)
    return seqIdx === sequence.length;
}

isValidSubsequence2([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10])
isValidSubsequence2([1, 2, 3, 4], [2, 4])
isValidSubsequence2([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10])
isValidSubsequence2([1, 2, 3, 4], [2, 4])
isValidSubsequence2([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10])
isValidSubsequence2([1, 2, 3, 4], [2, 4])
isValidSubsequence2([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10])
isValidSubsequence2([1, 2, 3, 4], [2, 4])
isValidSubsequence2([1, 2, 3, 4], [2, 49])
isValidSubsequence2([1, 2, 3, 4], [2, 4, 45])
isValidSubsequence2([1, 2, 3, 4], [2, 4, 45])
