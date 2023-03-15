
// O(n) Time & Complexity   
function makeAnagram(a, b) {
    // Write your code here

    // declare a hashmap and two counter 
    let map = {}, aCount = 0, bCount = 0;

    // do loop for a
    for (let i = 0; i < a.length; i++) {
        // we populate our hash
        // we check if our population is true
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

    let deletions = (a.length - aCount) + bCount;
    // console.log(deletions)
    return deletions;
}

makeAnagram('cde', 'abc');
makeAnagram('edc', 'cba');
makeAnagram('edcg', 'cbak'); // third test - checking for other cases
makeAnagram('edcg', 'cbak'); // forth test -  especial cases?
makeAnagram('edcg', 'ak'); // forth test -  especial cases?


// Alternate Response || CGT

function makeAnagram(a, b) {

    const freqA = getFrequency(a);
    const freqB = getFrequency(b);
    let deletions = 0;
    
    for (const char in freqA) {
      if (!freqB[char]) {
        deletions += freqA[char];
      } else {
          deletions += Math.abs(freqA[char] - freqB[char]);
          deletions = deletions + Math.abs(freqA[char] - freqB[char])
          console.log(deletions)
        // console.log(freqB)
          // console.log(freqA)
        freqB[char] = null;
      }
    }
    
    for (const char in freqB) {
      if (freqB[char]) {
        deletions += freqB[char];
      }
    }
    // Object reacching here
    // console.log(deletions, freqA, freqB);
    return deletions;
  }
  
  function getFrequency(str) {
    const freq = {};
    
    for (const char of str) {
      freq[char] = freq[char] + 1 || 1;
    }
    console.log(freq)
    return freq;
  }

makeAnagram('cde', 'abc')
makeAnagram('cde', 'abc')
makeAnagram('cde', 'abc')
makeAnagram('cde', 'abc')
makeAnagram('cde', 'abc')
makeAnagram('cde', 'abc')
getFrequency('cde', 'abc')
  
  
  
  
  