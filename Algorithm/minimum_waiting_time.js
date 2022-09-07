function minimumWaitingTime(queries) {
    // Write your code here.
    let counter = 0;
    // first we sort the array 
    queries.sort((a, b) => a - b);
    
    // console.log(queries);
    let totaWaitingTime = 0;

    // we iterate throught the array 

    for (let idx = 0; idx < queries.length; idx++) {
      const duration = queries[idx];
      const queriesLeft = queries.length - (idx + 1);
      totaWaitingTime += duration * queriesLeft;
    }


    return 0;
  }
minimumWaitingTime([3,2,1,2,6]);