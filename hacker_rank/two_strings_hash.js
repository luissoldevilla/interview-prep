function twoStrings(s1, s2) {
    // Write your code here

    let mainSubstring = {};

    for (let i = 0; i < s1.length; i++) {
        const substring = s1[i];
        mainSubstring[substring] = true // ? mainSubstring[substring] + 1 : 1;
        // console.log(mainSubstring);
        // console.log(substring); 
    }
    for (let j = 0; j < s2.length; j++) {
        const substring2 = s2[j];
        if (mainSubstring[substring2]) {
            console.log('YES');
            return 'yes';
        }
    }
    console.log('NO')
    return 'no';

}

twoStrings('hello', 'world');
twoStrings('and', 'art');
twoStrings('and', 'ert');
twoStrings('d', 't');