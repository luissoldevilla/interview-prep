function aVeryBigSum(ar) {
    // Write your code here

    // we assigned a variable to keep track of counter named 'total'
    let total = 0; 
    // we make a for that go through the array
    for (let i = 0; i < ar.length; i++) {
        // Inside we assign the sum of each element on the array
       total += ar[i];
    }
    // WE RETURNNNN THE VALUE HERE
    return total;

}

console.log(aVeryBigSum([1, 2, 3, 4, 5]));
console.log(aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]));
console.log(aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]));

