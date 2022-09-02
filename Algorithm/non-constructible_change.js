function nonConstructibleChange(coins) {
  // Write your code here.

  // O(nlogn) Time | O(1) Space - Where n is the number of coins
  
  // Question to ask the interviwere:
  //  Able to sort in Place or not?
  // if yes it will be O(1) Time
  // if noy it will be  O(n) Time
  
    
    coins.sort((a, b) => a - b);
  
    let currentChangeCreated = 0;
    for (const coin of coins) {
        // console.log(coin);
        console.log(coins);
      if (coin > currentChangeCreated +1) return currentChangeCreated + 1;
      currentChangeCreated += coin;
    }
    
    console.log(currentChangeCreated + 1);
    return currentChangeCreated + 1;
  }

  nonConstructibleChange([5,7,1,1,2,3,22]);