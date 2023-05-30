// Find which 2 integers in the array add up to to the targetSum
// Return those 2 intergers in a array

// This is the First Solution
// O(n^2) Time | O(1) Space
// It's O(n^2) time because it iterating twice through two loops
// O(1) Space Because we storing varibles

function twoNumberSum(array, targetSum) {
    for (let i = 0; i < array.length - 1; i++) {
        const firstNum = array[i]
        console.log(firstNum)
        for ( let j = 0; j < array.length; j++){
            const secondNum = array[j]
            // console.log(secondNum)
            if (firstNum + secondNum === targetSum) {
                // console.log([firstNum, secondNum])
                return [firstNum, secondNum]
            }
        }
    }
    return []
}

console.log(twoNumberSum([2,7,11,15], 9))
twoNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 17)
twoNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 18)
twoNumberSum([-7, -5, -3, -1, 0, 1, 3, 5, 7], -5)



// Second Solution 
// Time Complexity:
// O(n) Time | O(n) Space
// O(n) Time: It only gotta run once because we using a hashmap
// O(n) Space: Because we storing our values in a hashmap 

function twoNumberSum2(array, targetSum) {
    // we declare a hash map
    const nums = {}
    for (const num of array) {
        // console.log(num)
        const suma = targetSum - num
        // console.log(suma)
        if (suma in nums) {
            // console.log(nums)
            return [suma, num]
        } else {
            nums[num] = true
        }
    }
    return [];
}

twoNumberSum2([3, 5, -4, 8, 11, 1, -1, 6], 10)
twoNumberSum2([3, 5, -4, 8, 11, 1, -1, 6], 10)
twoNumberSum2([3, 5, -4, 8, 11, 1, -1, 6], 10)
twoNumberSum2([3, 5, -4, 8, 11, 1, -1, 6], 10)
twoNumberSum2([3, 5, -4, 8, 11, 1, -1, 6], 10)
twoNumberSum2([3, 5, -4, 8, 11, 1, -1, 6], 10)
twoNumberSum2([3, 5, -4, 8, 11, 1, -1, 6], 10)
twoNumberSum2([3, 5, -4, 8, 11, 1, -1, 6], 10)
twoNumberSum2([3, 5, -4, 8, 11, 1, -1, 6], 10)
twoNumberSum2([3, 5, -4, 8, 11, 1, -1, 6], 10)
twoNumberSum2([3, 5, -4, 8, 11, 1, -1, 6], 10)
twoNumberSum2([3, 5, -4, 8, 11, 1, -1, 6], 10)
twoNumberSum2([3, 5, -4, 8, 11, 1, -1, 6], 10)
twoNumberSum2([3, 5, -4, 8, 11, 1, -1, 6], 10)
twoNumberSum2([3, 5, -4, 8, 11, 1, -1, 6], 10)
twoNumberSum2([3, 5, -4, 8, 11, 1, -1, 6], 10)
twoNumberSum2([3, 5, -4, 8, 11, 1, -1, 6], 10)
twoNumberSum2([3, 5, -4, 8, 11, 1, -1, 6], 10)
twoNumberSum2([3, 5, -4, 8, 11, 1, -1, 6], 10)
twoNumberSum2([3, 5, -4, 8, 11, 1, -1, 6], 10)
twoNumberSum2([3, 5, -4, 8, 11, 1, -1, 6], 10)
twoNumberSum2([3, 5, -4, 8, 11, 1, -1, 6], 10)
twoNumberSum2([3, 5, -4, 8, 11, 1, -1, 6], 10)
twoNumberSum2([3, 5, -4, 8, 11, 1, -1, 6], 10)  


