function freqQuery(queries) {
    // write your code here

    // declare 2 empty arrays
    let ops = []; // operations 
    let output = []; // for the result 
    // we decare hashmap for populate the arrays
    let obj = {}; 
    // varible to check for frequencies starts false.
    let checkFreq = false;
  
    for (let i = 0; i < queries.length; i++) {
      // we assign a varible to queries[i]
      let query = queries[i];
      
    //   console.log(query[0]); => x
    //   console.log(query[1]); => y


    // checks for the x 
      if (query[0] === 1) {
        // we push teh value of query[1] to ops 
          ops.push(query[1]);
          // we check for y 
        } else if (query[0] === 2) {
            // we declare a vatiable for the index of ops at query[1]
            let index = ops.indexOf(query[1]);
            // console.log(index);
        // we check if the index of our variable is ther by saying if its more then -1
        if (index > -1) {
        // if so we delete it using splice
          ops.splice(index, 1);
        }
        console.log(ops);
      } else {
        let freq = query[1];
        if (ops.length === 0) {
          output.push(0);
        } else {
          obj = charToObj(ops);
          for (let number in obj) {
            if (obj[number] === freq) {
              checkFreq = true;
              break;
            } else {
              checkFreq = false;
            }
          }
          if (checkFreq) {
            output.push(1);
          } else {
            output.push(0);
          }
        }
      }
    }
    console.log(output);
    return output;
  }
  
  function charToObj(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
      if (obj[arr[i]]) {
        obj[arr[i]] += 1;
      } else {
        obj[arr[i]] = 1;
      }
    }
    // console.log(obj);
    return obj;

}

freqQuery([[1,1],[2,2],[3,2],[1,1],[1,1],[2,1],[3,2]]);
// charToObj([(1,1),(2,2),(3,2),(1,1),(1,1),(2,1),(3,2)]);