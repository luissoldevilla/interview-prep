function maximumToys(prices, k) {
    // Write your code here
    // let newToys = 0;
    // for (let i = 0; i < prices.length; i++) {
    //     prices.sort((a, b) => a - b);
    //     let toy = prices[i];
    //     for (let j = 0; j < i; j++) {
    //         let toy2 = prices[j];
    //         if (toy + toy2 === k) {
    //         newToys++;
    //         }
    //     }
    //     console.log(prices.reduce((a, b) => a + b, ));
    //     // console.log(prices.sort((a, b) => a - b));
    //     // if (k > toy) {
    //     //     newToys++;
    //     //     // console.log(newToys++);
    //     // }
    // }
    // console.log(newToys);
    // return newToys;

    // solution 2 
    // let newToys = prices.sort((a,b) => a - b);
    
    // let counter = 0;
   
    // newToys.forEach(price => {
       
    //     if (k > price) { // if true
            
    //         k = k - price;
            
    //         counter++;
    //     }
    // });
    // console.log(counter);
    // return counter;

    let total = 0;
    let toys = [];
    let sortedPrices = prices.sort((a, b) => a - b);
    console.log(sortedPrices);

    for (let p of sortedPrices) {
        if (total + p <= k) { // 
            toys.push(p);
            total += p;
            console.log(total);
        } else {
            // console.log(toys.length);
            console.log(toys);
            return toys.length;
        }
    }
};

maximumToys([1,2,3,4], 7)
