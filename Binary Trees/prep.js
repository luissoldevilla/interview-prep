
// This File is for reviewing objects 
const person = {
    name: 'Angel',
    course: 'Front-end',
};

console.log(person); 
console.log(typeof JSON.stringify(person));
// console.log(typeof JSON.stringify(person));

const map = new Map();
map.set(123, 'hello');

console.log(map.get(123));

const set = new Set();
set.add('hello');
set.add('world');
console.log(set.has('hello'));
console.log(set.size);
console.log(set);
console.log('')