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
            return [a[i], a[j], a[k]];
          }
        }
      }
    }
    // If no such triplet is found, return an empty array
    return [];
  }
  