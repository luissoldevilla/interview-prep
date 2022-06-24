function countingValleys(steps, path) {
    // Write your code here
    // We turn the string into an array
    let strArr = path.split('')
    
    let count = 0
    let result = 0

    // we iterate through the steps
    for(let step = 0; step < steps; step++){
        // console.log(step);
        // console.log(strArr[step]);
        if(count == 0 && strArr[step] == 'D'){
            count -= 1;
            result++;
        } else if(strArr[step] == 'D'){
            count -= 1
        } else {
            count += 1
        }
    }
    // console.log(count);
    console.log(result);
    return result
}


countingValleys(8, 'UDDDUDUU');
// countingValleys(12, 'UDDDUDUUDDUU');