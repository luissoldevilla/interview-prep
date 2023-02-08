// Non-Constructible Change problem!

// O(nlogn) Time | O(1) Space - Where n is the number of coins

function nonConstructibleChange(coins) {
    // console.log(coins);
    // We do Sorting:
    coins.sort((a,b) => a - b);
    // console.log(coins.sort((a,b) => a - b))

    let currentChangeCreated = 0;


    for (const coin of coins) {
        if (coin > currentChangeCreated + 1) {
            // return currentChangeCreated + 1;
            currentChangeCreated += coin;
        }
    }
    console.log(currentChangeCreated + 1)
    console.log(currentChangeCreated)
    console.log(currentChangeCreated)
    return currentChangeCreated + 1;
}

// Calling our Function 
nonConstructibleChange([5, 7, 1, 1, 2, 3, 22])
nonConstructibleChange([1, 5, 1, 1, 1, 10, 15, 20, 100])