const friends = [12, 21, 23, 55, 32, 42, 9, 76 ]; 
const partial = friends.slice(3, 7);
console.log(partial);
console.log(friends);


// const picnicFee = [400, 880, 999, 900, 150, 333, 223, 120, 540];
// // Removes elements from an array
// //  and, if necessary, inserts new elements in their place,
// //  returning the deleted elements.
// const partial2 = picnicFee.splice(3, 4);
// console.log(partial2);
// console.log(picnicFee);


//  difference between slice and splice
//  1--- slice ar (2, 6) means index 2 theke soro hobe , index 6 ar bitore sob koita nibe .  on the other hand, splice ar (2, 4) means index 2 theke soro hobe and next 4 ta element remove korbe.
//  2--- slice ar pore ager array same thake . on the other hand, splice ar pore ager array change hoiya jai mane jegolo remove hoiya jai segolo ar next time array te theke na .




// inserts new elements in their place, in a array
const picnicFee = [400, 880, 999, 900, 150, 333, 223, 120, 540];
const partial2 = picnicFee.splice(3, 4, 44, 77,88,99,101);
console.log(partial2);
console.log(picnicFee);
