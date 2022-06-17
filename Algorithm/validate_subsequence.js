

function isValidSubsequence(array, sequence) {
    // Write your code here.
    // Time: O(N)
    // N is length of the main array
    // Space: O(1) 
    // 1 Because our array is constant 
    let arr = 0; // this works as index
    let sub = 0; //
    //
    while (arr < array.length && sub < sequence.length) {
      if (array[arr] === sequence[sub]) sub++;
      arr++;
    }
    console.log(sequence.length);
    return sub === sequence.length;
  }

  isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]);