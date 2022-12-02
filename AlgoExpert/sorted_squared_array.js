

function sortedSquaredArray(array) {

    const sortedSquares = new Array(array.length).fill(0); 
    for (let i = 0; i < array.length; i++) {
        const int = array[i];
        sortedSquares[i] = int * int;
    }
    sortedSquares.sort((a,b) => a - b);
    return sortedSquares;

}

sortedSquaredArray([1, 2, 3, 5, 6, 8, 9])
sortedSquaredArray([1, 2, 3, 4, 5])

function sortedSquaredArray2(array) {
    const sortSquares = new Array(array.length).fill(0);
    let smallValueIdx = 0;
    let largerValueIdx = array.length - 1;

    for (let idx = array.length -1; idx >= 0; idx--) {
        const smallerValue = array[smallValueIdx];
        const largerValue = array[largerValueIdx];

        if (Math.abs(smallerValue) > Math.abs(largerValue)) {
            sortSquares[idx] = smallerValue * smallerValue;
            smallerValue++;
        } else {
            sortSquares[idx] = largerValue * largerValue;
            largerValueIdx--;
        }
    }
    return sortedSquares;
}

console.log(sortedSquaredArray2([1, 2, 3, 5, 6, 8, 9]))
console.log(sortedSquaredArray2([1, 2, 3, 5, 6, 8, 9]))
sortedSquaredArray2([1, 2, 3, 4, 5])
sortedSquaredArray2([1, 2])