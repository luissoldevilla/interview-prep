// Psuedo Code
// Initialize the minimum value as infinity and the maximum value as -infinity
// Initialize two arrays of size n, where L[i] stores the smallest value on the left side of A[i], and R[i] stores the largest value on the right side of A[i].
// Fill the L[] array from left to right, keeping track of the minimum value.
// Fill the R[] array from right to left, keeping track of the maximum value.
// Traverse the array A[] from left to right and check if there exists any element A[i], such that L[i] < A[i] < R[i]. If found, return true.
// If no such element exists, return false.

// Brute Force Solution

function find3Numbers(a, N) {
    // Traverse the array from i = 0 to N-2
    for (let i = 0; i < N - 2; i++) {
      // Traverse the array from j = i+1 to N-1
      for (let j = i + 1; j < N - 1; j++) {
        // Traverse the array from k = j+1 to N
        for (let k = j + 1; k < N; k++) {
          // If the condition a[i] < a[j] < a[k] is satisfied, return the result
          if (a[i] < a[j] && a[j] < a[k]) {
            console.log([a[i], a[j], a[k]])
            console.log(1)
            return 1;
          }
        }
      }
    }
    // If no such triplet is found, return an empty array
    console.log("Output: ", -1)
    return -1;
  }

find3Numbers([1,2,1,1,3], 5)
find3Numbers([1,1,3], 3)


function find3Numbers(a, N) {
  // Initialize the minimum value as infinity and the maximum value as -infinity
  let min = a[0];
  let max = a[N - 1];

  // Initialize two arrays of size n, where L[i] stores the smallest value on the left side of a[i], and R[i] stores the largest value on the right side of a[i].
  let L = new Array(N);
  let R = new Array(N);

  // Fill the L[] array from left to right, keeping track of the minimum value.
  L[0] = -1;
  for (let i = 1; i < N; i++) {
    L[i] = min;
    min = Math.min(min, a[i]);
  }

  // Fill the R[] array from right to left, keeping track of the maximum value.
  R[N - 1] = -1;
  for (let i = N - 2; i >= 0; i--) {
    R[i] = max;
    max = Math.max(max, a[i]);
  }

  // Traverse the array a[] from left to right and check if there exists any element a[i], such that L[i] < a[i] < R[i]. If found, return the result.
  for (let i = 1; i < N - 1; i++) {
    if (L[i] < a[i] && a[i] < R[i]) {
      return [L[i], a[i], R[i]];
    }
  }

  // If no such triplet is found, return an empty array
  return [];
}
