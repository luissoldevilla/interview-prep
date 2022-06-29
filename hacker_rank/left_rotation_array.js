function rotLeft(a, d) {
    // Write your code here
    
    // este condigo crea un nuevo array 
    // a = Array.from({length: a}, (v, i) => i + 1)

    for (let i = 0; i < d; i++) {   
       a.push(a[0]);
       a.shift();
    }

    return a;
}

console.log(rotLeft(5, 4));