function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
    // Write your code here.
    console.log(redShirtSpeeds);
    console.log(blueShirtSpeeds)
    console.log(fastest);

    return 0;
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