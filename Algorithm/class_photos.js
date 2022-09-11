function classPhotos(redShirtHeights, blueShirtHeights) {
    // Write your code here.
    // we sort the arrays first
    redShirtHeights.sort((a,b) => b - a);
    console.log(redShirtHeights);
    blueShirtHeights.sort((a,b) => b - a);
    console.log(blueShirtHeights);

    const shirtColorInFirstRow = redShirtHeights[0] < blueShirtHeights[0] ? 'RED' : 'BLUE';

    return false;
}

classPhotos([5, 8, 1, 3, 4],[6, 9, 2, 4, 5]);