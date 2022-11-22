function sortedSquaredArray(array   ) {
    const sortedSquares = new Array(array.length).fill(0); 
    for (let i = 0; i < array.length; i++) {
        const int = array[i];
        sortedSquares[i] = int * int;
    }
    sortedSquares.sort((a,b) => a - b);
    return sortedSquares;
}

sortedSquaredArray()