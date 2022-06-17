   
/*  
    Time: O(N)
    N is length of the main array
    Space: O(1) 
    1 Because our array is constant 
*/    
function isValidSubsequence(array, sequence) {

    let arr = 0; // this works as index
    let sub = 0; //

    while (arr < array.length && sub < sequence.length) {
      if (array[arr] === sequence[sub]) sub++;
      arr++;
    }
    console.log(sequence.length);
    return sub === sequence.length;
  }

isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]);

/*  
    Time: O(N)
    N is length of the main array
    Space: O(1) 
    1 Because our array is constant 
*/    
function isValidSubsequence2(array, sequence) {
    // Write your code here.
    let seqIdx = 0;
    
    for (const value of array) {
        if (seqIdx === sequence.length) break;
        if (sequence[seqIdx] === value) seqIdx ++;
    }
    console.log(seqIdx);
    return seqIdx === sequence.length;
}

isValidSubsequence2([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]);
