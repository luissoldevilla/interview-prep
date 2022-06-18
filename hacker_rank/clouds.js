function jumpingOnClouds(c) {
    // Write your code here
    let count = 0;
    let i = 0;
    while (i < c.length - 1) {
        c[i + 2] === 0 ? i += 2 : i++;
        count++;
    }
    console.log(count);
    return count;
}

function looping(d) {
    let a = 0;
    for (let i = 0; i < d.length; i++) {
        console.log(a++);
    }
}

// looping([1, 2, 2, 2, 34]);

// function jumpingOnClouds(c) {
//     let minJumps = 0;
//     let currPos = 0;
//     for(let i = 0; i < c.length; i++) {
//     const oneJump = c[currPos + 1];
//     const twoJump = c[currPos + 2];
    
//     if(twoJump === 0) {
//     currPos += 2;
//     minJumps++;
//     } else if(oneJump === 0) {
//     currPos += 1;
//     minJumps++;
//     }
    
//     }
//     console.log(minJumps);
//     return minJumps;
//     }

    jumpingOnClouds([0, 0, 1, 0, 0, 1, 0,]);

function jumpingOnClouds2(c) {
    // Write your code here
    let a = 0;
    
    for (let i = 0; i < c.length - 1; i++, a++) {
        if (c[i + 2] === 0) i++
    }
    console.log(a++)
    return a++;

}

jumpingOnClouds2([0, 0, 1, 0, 0, 1, 0]);
// jumpingOnClouds([0, 0, 1, 0, 0, 1, 0, 0]);
// jumpingOnClouds([0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1]);

