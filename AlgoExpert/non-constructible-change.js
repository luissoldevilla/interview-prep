// Non-Constructible Change problem!
// I gotta check for changes on the array

// O(nlogn) Time | O(1) Space - Where n is the number of coins

function nonConstructibleChange(coins) {
    // console.log(coins);
    // We do Sorting:
    coins.sort((a,b) => a - b);

    // Question to ask interwire:
    // Able to sort in Place or not?
    // if yes it will be O(1) time
    // if not it will be O(n) time

    let currentChangeCreated = 0;


    for (const coin of coins) {
        if (coin > currentChangeCreated + 1) {
            // return currentChangeCreated + 1;
            currentChangeCreated += coin;
        }
    }

    // console logging

    console.log(currentChangeCreated + 1)
    console.log(currentChangeCreated)

    return currentChangeCreated + 1;
}

// Calling our Function 

// Coins = [1,2,3]
// Sample output: 
// 20
nonConstructibleChange([5, 7, 1, 1, 2, 3, 22])
nonConstructibleChange([5, 7, 1, 1, 2, 3, 24])
nonConstructibleChange([5, 7, 2, 8, 24])
nonConstructibleChange([1, 5, 1, 1, 1, 10, 15, 20, 100])