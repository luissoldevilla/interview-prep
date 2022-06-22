// function repeatedString2 (s, n) {
//     // Write your code here
//     console.log(s, n);

//     let stringLength = s.substring(0,);

//     console.log(stringLength);

//     let counter = 0;
//     for (let i = 0; i < stringLength.length; i++) {
//         const char = stringLength[i];
//         console.log(stringLength[i]);
//         if (char === 'a') counter ++;
//     }
//     console.log(counter);
//     return counter;
// }


// function repeatedString3(s, n) {
//     // we use .split to count 'a' in the given string
//     let occurances = (s.split("a").length - 1);
//     console.log(occurances);

//     // We divide n by the lenght of s
//     let max = Math.floor(n / s.length);
//     console.log(max);

//     //
//     let totalAs = occurances * max;
//     console.log(totalAs);

//     totalAs += (s.slice(0, n % s.length).split("a").length - 1);
//     console.log(totalAs);
//     return totalAs;
//  }

function repeatedString(s, n) {

    let fullRepeats = Math.floor(n / s.length);
    let remainder = n % s.length;
    let countA = 0;

    for (let i = 0; i < s.length; i++) {
      if (s.charAt(i) === 'a') {
        countA++;
      }
    }

    countA = countA * fullRepeats;

    if (remainder) {
      for (let i = 0; i < remainder; i++) {
        if (s.charAt(i) === 'a') {
          countA++;
        }
      }
    }
    console.log(countA);
    return countA;
  }

repeatedString('aba', 10);
<<<<<<< HEAD
<<<<<<< HEAD
// repeatedString('a', 1000000000000);
=======
=======
>>>>>>> master
repeatedString('a', 1000000000000);
repeatedString('abaaba', 1000000000000);

>>>>>>> Repeated String Hacker Rank
