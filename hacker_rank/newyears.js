// function minimumBribes(q) {
//     let num = 0
//     let chaotic = false
//     for(let i=q.length-1; i>=0; i--) {
//         if(q[i]-i>3) chaotic = true
//             for(let j=q[i]-2;j<i;j++) {
//                 if(q[j]>q[i]) num++
//             }
//         }
//     if(chaotic) console.log("Too chaotic")
//         else console.log(num)
// }


// let q = [1,2,3,4,5,6,7];
// console.log(minimumBribes(q));

function minimumBribes(q) {
    console.log(sort(q));
    
        function sort(items) {
         let bribes = 0;
    
         for (let i = 0; i < items.length; i++) {
             if (items[i] - (i + 1) > 2) return "Too chaotic";
             for (let j = 0; j < i; j++) {
                 if (items[j] > items[i]) bribes++;
             }
             console.log(items);
         } 
         console.log(bribes);
         return bribes;
       }
    }
minimumBribes(1, 2, 3, 4, 5, 7, 6);
