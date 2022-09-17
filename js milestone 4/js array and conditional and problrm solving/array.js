var friendsAge = [12, 21, 23, 42, 9, 76 ] ; 
var picnicFee = [400, 880, 999, 900, 150];
var nayok = ['sakib', 'anonto', 'bapparaj', 'jayed khan'];
var vowels = ['a', 'e', 'i', 'o', 'u'];
console.log(vowels);
console.log(vowels.length);

console.log(picnicFee);
console.log(picnicFee.length);


//  check array using Array.isArray()
const age = 52;

const friends = [12, 21, 23, 42, 9, 76 ] ; 

console.log(Array.isArray(age));
console.log(Array.isArray(friends));

//  array bade onno kiso check korle typeof use kora hoi
console.log(typeof age);

console.log(friends.includes(23))

//  concat means joining two array 

const youngfriendAge =[12, 13, 16, 17];
// const newFriendAge = youngfriendAge.concat(friends);
//  same result . jeta age likhbe seta age thakbe
const newFriendAge = friends.concat(youngfriendAge);
console.log(newFriendAge);