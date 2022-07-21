function arrayManipulation(n, queries) {
    // Write your code here

    n = Array.from({length: n}, (v, i) => 0)

    // console.log(n);

    for (let i = 0; i < queries.length; i++) {
        for (let j = 0; j < queries[i].length; j++) {
            let indice = queries[i][j];
            let indice2 = queries[i][0];
            // let indice3 = queries[i][j+2];
            // console.log(indice);
            // console.log(queries[i]);
            // console.log(indice2);
        }
    }

};

arrayManipulation(5,[[1,2,100], [2,5,100], [3,4,100]]);
// console.log(arrayManipulation(5,[[1,2,100], [2,5,100], [3,4,100]]))

function arrayManipulation2(n,queries) {
    let arr = new Array(n + 1).fill(0);
    let max = 0;
    queries.forEach(([a, b, k]) => {
        for (let i = a; i <= b; i++) {
            arr[i] += k;
            // console.log(arr[i] += k);
            if (arr[i] > max) {
                max = arr[i];
            }
        }
    })
    // console.log(max)
    return max
}
arrayManipulation2(5,[[1,2,100], [2,5,100], [3,4,100]])

function arrayManipulation3(n, queries) {
    // we declare an empty array with 6 empty spaces
    const arr = Array(n + 1);
    // declare counter 
    let maxValue = 0;
    // declare el numero recurrente / current number
    let currentNumber = 0;
    // we iterate through the queries using forEach 
    // declare through the querie startRange, endRange and value
    queries.forEach(([startRange, endRange, value]) => {
        // starRange starts at 0 
         arr[startRange] = arr[startRange] || { start: 0, end: 0 };
         // endRange declaration
         arr[endRange] = arr[endRange] || { start: 0, end: 0 };
        // we add the value based on the start and end
         arr[startRange].start += value;
         arr[endRange].end += value;
     });

     // we iterate through the array to check for the maxvalue
    arr.forEach((cell) => {
       if (cell) {
         currentNumber += cell.start;
         if (currentNumber > maxValue) {
            maxValue = currentNumber;
         }
         currentNumber -= cell.end;
     }
   });
 console.log(maxValue);
 return maxValue;

}
arrayManipulation3(5,[[1,2,100], [2,5,100], [3,4,100]])
arrayManipulation3(5,[[1,2,100], [2,5,100], [3,4,100]])


