// function minimumSwaps(arr) {
//     let swaps = 0;
//     for (let i = 0; i < arr.length; i++) {
//         let indice = arr[i];
//         // console.log(indice);

//         for (let j = i + 1; j < arr.length; j++) {
//             let indice2 = arr[j];
//             // console.log(indice);
//             // console.log(indice2);
//             if (indice2 < indice || indice < indice2) {
//                 [indice, indice2] = [indice2, indice];
//                 // console.log(newarr);
//                 // console.log([indice2, indice]);
//                 swaps++;
//             } 
//         }
//     }
//     console.log(swaps);
//     return swaps;

// }

// minimumSwaps([4,3,1,2]);

function minimumSwaps2(arr) {
       let pos = [];
       let i = 0;
       let swaps = 0;
       let currentVal, supposedVal, locationSupposedVal;
       //get position of all the values in the inital array.
       for (i=0;i<arr.length;i++) {
           pos[arr[i]]=i;
       }
       //match the inital array with the ascending sequence from min to max
      for(i=0; i<arr.length;i++){
          currentVal = arr[i];
          supposedVal = i+1;
          locationSupposedVal = pos[supposedVal];
          if(currentVal != supposedVal){
              //swap the current value with the value that's supposed to be here. 
              arr[i] = supposedVal;
              arr[locationSupposedVal] = currentVal;
              //update the value locations in the position array
              pos[supposedVal] = i;
              pos[currentVal] = locationSupposedVal;
              //count the no. of swaps
              swaps++;
          }
      }
      console.log(swaps);
      return swaps;
}
minimumSwaps2([4,3,1,2]);
minimumSwaps2([1,3,5,2,4,6,7]);
