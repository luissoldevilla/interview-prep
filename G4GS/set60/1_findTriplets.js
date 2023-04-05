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
  