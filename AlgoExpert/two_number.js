// Find which 2 integers in the array add up to to the targetSum
// Return those 2 intergers in a array

function twoNumberSum(array, targetSum) {
    for (let i = 0; i < array.length - 1; i++){
        const firstNum = array[i]
        // console.log(firstNum)
        for ( let j = 0; j < array.length; j++){
            const secondNum = array[j]
            // console.log(secondNum)
            if (firstNum + secondNum === targetSum) {
                console.log([firstNum, secondNum])
                return [firstNum, secondNum]
            }
        }
    }
}

twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10)