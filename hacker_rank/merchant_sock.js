/*
There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, 
determine how many pairs of socks with matching colors there are.

Example

There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .

Function Description

Complete the sockMerchant function in the editor below.

sockMerchant has the following parameter(s):

int n: the number of socks in the pile
int ar[n]: the colors of each sock
Returns

int: the number of pairs

*/

function sockMerchant(n, ar) {
    // Write your code here
    
    // started working with a hash map 
    let socks = {};
    let pairs = 0;
    
    for (let element of ar) {
        socks[element] = socks[element] + 1 || 1;
        // console.log(socks);
        if (socks[element] % 2 ===0) {
            pairs += 1;
        }
    }
    console.log('There is ' + pairs + ' pairs');
    return pairs;
}

sockMerchant(10, [10, 20, 20, 10, 10, 30, 50, 10, 20]);
sockMerchant(8, [10, 20, 20, 10, 10, 30, 50]);
sockMerchant(12, [10, 20, 20, 10, 10, 30, 50, 50, 50, 60, 60]);

function sockMerchant2(n, ar) {
    // Write your code here
    const uniqueValues = [... new Set(ar)];
    let count = 0;

    uniqueValues.forEach(value => {
        const filterValues = ar.filter(element => element == value)
        const pairsNumber = Math.floor(filterValues.length/2)
        count += pairsNumber
    })
    console.log(count);
    return count
}


sockMerchant2(10, [10, 20, 20, 10, 10, 30, 50, 10, 20]);
sockMerchant2(8, [10, 20, 20, 10, 10, 30, 50]);
sockMerchant2(12, [10, 20, 20, 10, 10, 30, 50, 50, 50, 60, 60]);

// second solution 
// different layout of hashmapping
function sockMerchant3(n, ar) {
    let sockMap = {}
    let result = 0
    for (let sock of ar) {
        sockMap[sock] ? sockMap[sock]++ : sockMap[sock] = 1
    }
    for (let sock in sockMap) {
        if (sockMap[sock] > 1) {
            result = result + Math.floor(sockMap[sock] / 2)
        }
    }
    console.log('este el la repuesta ' + result);
    return result
}

sockMerchant3(10, [10, 20, 20, 10, 10, 30, 50, 10, 20]);
sockMerchant3(8, [10, 20, 20, 10, 10, 30, 50]);
sockMerchant3(12, [10, 20, 20, 10, 10, 30, 50, 50, 50, 60, 60]);