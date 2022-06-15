// First Solution

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
                console.log(answer);
            }   
        }
    }
    return [];
}

twoNumberSum();
