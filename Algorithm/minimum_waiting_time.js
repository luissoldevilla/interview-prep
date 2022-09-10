function minimumWaitingTime(queries) {
    // Write your code here.
    let counter = 0;
    // first we sort the array 
    queries.sort((a, b) => a - b);
    
    // console.log(queries);
    let totaWaitingTime = 0;

    // we iterate throught the array 
    for (let idx = 0; idx < queries.length; idx++) {
      // we make a index as variable
      const duration = queries[idx];
      console.log(duration);
      // we make a index starting from the left
      const queriesLeft = queries.length - (idx + 1);
      console.log(queriesLeft);
      // we compare the total waiting time here
      // totaWaitingTime = totalWaitingTime + duration * queriesLeft;
      totaWaitingTime += duration * queriesLeft;
    }
    // here we return totaWaitingTime
    console.log(totaWaitingTime);
    return totaWaitingTime;
  }
  
minimumWaitingTime([3,2,1,2,6]);
minimumWaitingTime([4,3,1,2,6]);
minimumWaitingTime([0]);
