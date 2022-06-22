<<<<<<< HEAD
=======
// This problem comes from AlgoExpert

>>>>>>> master
function threeNumberSum(array, targetSum) {
    // Write your code here.
  
    for (let i = 0; i < array.length - 1; i++) {
      const firstNum = array[i];
      for (let j = i + 1; j < array.length - 1; j++) {
        const secondNum = array[j];
        // console.log(secondNum);
        for (let k = j + 1; k < array.length -1; k++) {
          const thirdNum = array[k];
          if (firstNum + secondNum + thirdNum === targetSum) {
            // console.log([firstNum, secondNum, thirdNum]);
            const newArr = [firstNum, secondNum, thirdNum];
            console.log(newArr.sort((a, b) => a - b));

            return newArr.sort((a, b) => a - b);
          }
        }
      }
    }
  }

threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0);
