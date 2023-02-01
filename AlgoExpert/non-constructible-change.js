function nonConstructibleChange(coins) {
    console.log(coins);
    coins.sort((a,b) => a - b);
    console.log(coins.sort((a,b) => a - b))
}

nonConstructibleChange([5, 7, 1, 1, 2, 3, 22])