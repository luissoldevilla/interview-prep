function checkMagazine(magazine, note) {
    // Write your code here
    // const words = {};
    let word = magazine.split(' ');
    let wordNote = note.split(' ');
    // console.log(wordNote);

    for (let i = 0; i < word.length; i++) {
        // console.log(word[i]);
        if (word[i] === wordNote[i]) {
            console.log('yes');
            return 'yes';
        } else {
            console.log('no');
            return 'no';
        }
    }
    // console.log(magazine);
    // console.log(note);

}

checkMagazine('give me one grand today night', 'give one grand today');
checkMagazine('two times three is not four', 'two times two is four');
