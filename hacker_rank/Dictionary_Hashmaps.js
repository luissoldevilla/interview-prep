// function checkMagazine(magazine, note) {
//     // Write your code here
//     // const words = {};
//     let word = magazine.split(' ');
//     let wordNote = note.split(' ');
//     // console.log(wordNote);

//     for (let i = 0; i < word.length; i++) {
//         // console.log(word[i]);
//         if (word[i] === wordNote[i]) {
//             console.log('yes');
//             return 'yes';
//         } else {
//             console.log('no');
//             return 'no';
//         }
//     }
//     // console.log(magazine);
//     // console.log(note);
//     // Still figuring out this problem
    
//     // hashmaps understading

// }

function checkMagazine(magazine, note) {
    let magDict = {};
    let works = '';

    //Populate magDict with words from the magWordArr
    for (let i = 0; i < magazine.length; i++){
        let word = magazine[i];
        magDict[word] = magDict[word] ? magDict[word] + 1 : 1;
        console.log(magDict);
    }

    //Loop through the note and compare with magazine object
    for (let i = 0; i < note.length; i++){
        //magDict has the word needed for the note
        if (!(note[i] in magDict)) {
            works = 'No';
            break;
        } else {
            //In the magDict
            if (magDict[note[i]] < 1) {
                works = 'No'
                break;
            }
            //Subtract one from the number of words in dict
            magDict[note[i]] = magDict[note[i]] - 1;
        }
    }
    if (works === '') { works = 'Yes' }
    console.log(works);
}

checkMagazine('give me one grand today night', 'give one grand today');
checkMagazine('two times three is not four', 'two times two is four');
