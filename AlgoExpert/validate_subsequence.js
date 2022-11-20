// Validate Subsequence

// Find a subsequence for the given array:
// Return a either True or Fals


//  First Solution  

function isValidSubsequence(array, sequence) {
    // we set up counters
    let arr = 0;
    let sub = 0;
    // we set up a  while loop 
    while (arr < array.length && sub < sequence.length) {
        console.log(array[arr])
        if (array[arr] === sequence[sub]) {
            sub++
            arr++
        }
        console.log(sub)
        return sub === sequence.length
    }
}

isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10])


// Second solution

function isValidSubsequence2(array, sequence) {

}

isValidSubsequence2([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10])
