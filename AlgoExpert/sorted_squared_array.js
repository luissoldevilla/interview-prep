function sortedSquaredArray(array   ) {
    const sortedSquares = new Array(array.length).fill(0); 
    for (let i = 0; i < array.length; i++) {
        const int = array[i];
        sortedSquares[i] = int * int;
    }
    console.log(newArr)
    sortedSquares.sort((a,b) => a - b);
    return sortedSquares;
}

sortedSquaredArray([1, 2, 3, 5, 6, 8, 9])
sortedSquaredArray([1, 2, 3, 4, 5])