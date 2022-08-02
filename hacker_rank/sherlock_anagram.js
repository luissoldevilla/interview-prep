function sherlockAndAnagrams(s) {
    // Write your code here
	let substring = {};
	let pairs = [];
	for ( let i = 0; i < s.length; i++) {
	const sub = s[i];
    substring[sub] = true ? substring[substring] + 1 : 1;
    console.log(substring)
    }
}
sherlockAndAnagrams('mom');