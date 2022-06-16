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

