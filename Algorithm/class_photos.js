// This is a problem we are coming back to 

function classPhotos(redShirtHeights, blueShirtHeights) {
    // Write your code here.
    // we sort the arrays first
    redShirtHeights.sort((a,b) => b - a);
    console.log(redShirtHeights);
    blueShirtHeights.sort((a,b) => b - a);
    console.log(blueShirtHeights);
    
    // we checking for if the indexes on 0 are equal either blue or red
    const shirtColorInFirstRow = redShirtHeights[0] < blueShirtHeights[0] ? 'RED' : 'BLUE';

    for (let idx = 0; idx < redShirtHeights.length; idx++) {
        const redShirtHeight = redShirtHeights[idx];
        console.log(redShirtHeight);
        const blueShirtHeight = blueShirtHeights[idx];
        console.log(blueShirtHeight);
      }

      if(shirtColorInFirstRow === 'RED') {
        if(redShirtHeight >= blueShirtHeight) return false;
      } else if (blueShirtHeight >= redShirtHeight) return false
      
    return false;
}

classPhotos([5, 8, 1, 3, 4],[6, 9, 2, 4, 5]);