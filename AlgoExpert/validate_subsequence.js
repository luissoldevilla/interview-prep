// Validate Subsequence

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
    }
}

isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10])