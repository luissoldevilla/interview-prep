function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
    // Write your code here.
    
    // we sort all the bycicles speeds[arrays]
    redShirtSpeeds.sort((a,b) => a - b);
    blueShirtSpeeds.sort((a,b) => a -b);
    
    console.log(redShirtSpeeds);
    console.log(blueShirtSpeeds)
    console.log(fastest);

    // if fastest is false then we call in the reverse array in place
    if (!fastest) reverseArrayInPlace(redShirtSpeeds);

    let totalSpeed = 0;

    // we proceed to iterate through the arrays:

    for (let idx = 0; idx < redShirtSpeeds.length; idx++) {
        const rider1 = redShirtSpeeds[idx];
        const rider2 = blueShirtSpeeds[blueShirtSpeeds.length - idx -1];
        totalSpeed += Math.max(rider1, rider2);
      }
    
    console.log(totalSpeed);
    return totalSpeed;

    function reverseArrayInPlace(array) {
        let start = 0;
        let end = array.length - 1;
        while (start < end) {
            const temp = array[start];
            array[start] = array[end];
            array[end] = temp;
            start++;
            end--;
          }
      }
}

tandemBicycle([5, 5, 3, 9, 2], [3, 6, 7, 2, 1], true);