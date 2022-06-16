/*
Write a function that takes in a non-empty array of distinct integers and an integer 
representing a target sum. If any two numbers in the input array sum up to the target 
sum, the function should return them in an array, in any order. 
If no two numbers sum up to the target sum, the function should return an empty array.

Note that the target sum has to be obtained by summing two different integers in the 
array; you can't add a single integer to itself in order to obtain the target sum.

You can assume that there will be at most one pair of numbers summing up to the target sum.

*/

// First Solution

// O(n^2) time | O(1) space

function twoNumberSum(array, targetSum) {

    array = [3, 5, -4, 8, 11, 1, -1, 6];
    targetSum = 10;
    

    for (let i = 0; i < array.length - 1; i++) {
        const firstNum = array[i];

        // Checking for first number in array
        // console.log('first nunmber is ' + firstNum);

        for (let j = i + 1; j < array.length; j++) {
            const secondNum = array[j];

            // checking for second number in array
            // console.log('second number is ' + secondNum);

            if (firstNum + secondNum === targetSum) {
                const answer = [firstNum, secondNum];
                console.log('This is the first answer ' + answer);
            }   
        }
    }
    return [];
}

twoNumberSum();

// Second Solution

// O(n) time | O(n) space

function secondSolution(array, targetSum) {

    array = [3, 5, -4, 8, 11, 1, -1, 6];
    targetSum = 10;

    const nums = {};
    for (const num of array) {
        const suma = targetSum - num;
        if (suma in nums) {
            const answer2 = [suma, num];
            console.log('This is the second answer ' + answer2);
            // return [suma, num];
        } else {
            nums [num] = true;
        }
    }
    return [];
}

secondSolution();