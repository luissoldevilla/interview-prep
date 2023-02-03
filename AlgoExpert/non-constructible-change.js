function nonConstructibleChange(coins) {
    console.log(coins);
    coins.sort((a,b) => a - b);
    console.log(coins.sort((a,b) => a - b))

    let currentChangeCreated = 0;

    for (const coin of coins) {
        if (coin > currentChangeCreated + 1) {
            // return currentChangeCreated + 1;
            currentChangeCreated += coin;
        }
    }
    console.log(currentChangeCreated + 1)
    return currentChangeCreated + 1;
}

nonConstructibleChange([5, 7, 1, 1, 2, 3, 22])
nonConstructibleChange([1, 5, 1, 1, 1, 10, 15, 20, 100])