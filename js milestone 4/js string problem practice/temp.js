let first = 5;
let second = 7;
console.log(first, second);

// wrong approch

// first = second;
// second = first;
// console.log(first, second);


//  using temp 

// const temp = first;
// first = second;
// second = temp;
// console.log(first, second);


//  another way 

[first, second] = [second, first];
console.log(first, second);

