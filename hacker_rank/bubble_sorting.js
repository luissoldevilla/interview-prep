function countSwaps(a) {
    // Write your code here
    let counter = 0;
    for (let i = 0; i < a.length; i++) {
        // console.log(a[i]);
        // console.log(a.length - 1)
        for (let j = 0; j < a.length - 1; j++) {
            // console.log(a[j]);
            if (a[j] > a[j + 1]) {
                [a[j], a[j + 1]] = [a[j + 1], a[j]];
                counter++;
            }
        }
        // console.log(a);
        // console.log(counter);
    }
    let  answer = `Array is sorted in ${counter} swaps.
First Element: ${a[0]} 
Last Element: ${a[a.length - 1]}` 
    return console.log(answer);
}

countSwaps([6,4,1]);