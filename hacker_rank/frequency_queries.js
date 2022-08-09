function freqQuery(queries) {
    // write your code here
    let store = [];
    let output = [];
    // we decare hashmap
    let obj = {};
    let checkFreq = false;
  
    for (let i = 0; i < queries.length; i++) {
      let query = queries[i];
  
      if (query[0] === 1) {
        store.push(query[1]);
      } else if (query[0] === 2) {
        let index = store.indexOf(query[1]);
        if (index > -1) {
          store.splice(index, 1);
        }
      } else {
        let freq = query[1];
        if (store.length === 0) {
          output.push(0);
        } else {
          obj = charToObj(store);
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
    // console.log(output);
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
    console.log(obj);
    return obj;

}

console.log(freqQuery([(1,1),(2,2),(3,2),(1,1),(1,1),(2,1),(3,2)]));
console.log(charToObj([(1,1),(2,2),(3,2),(1,1),(1,1),(2,1),(3,2)]));