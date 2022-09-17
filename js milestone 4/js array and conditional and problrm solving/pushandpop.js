//  adding  something using push

var number = [12, 21, 23, 42, 9, 76 ]; 
number.push(49);
console.log(number);

var friends = ['balam', 'salam', 'kalam'];
friends.push('halam');
console.log(friends);

//  kickout  something using pop

var friends = ['balam', 'salam', 'kalam'];
friends.pop();
console.log(friends);

// use pop to get the last element 

var friends = ['balam', 'salam', 'kalam', 'delam', 'mairalam'];
var element = friends.pop();
console.log(friends);
console.log(element);


// to add element to an array in the beginning
var friends = ['balam', 'salam', 'kalam'];
friends.unshift('gelam');
console.log(friends);

// to add multiple element to an array in the beginning
var friends = ['balam', 'salam', 'kalam'];
friends.unshift('gelam', 'dilam');
console.log(friends);

// to remove element to an array in the beginning
var friends = ['balam', 'salam', 'kalam'];
friends.shift();
console.log(friends);

// to remove element to an array in the beginning
var friends = ['balam', 'salam', 'kalam', 'delam', 'mairalam'];
friends.splice(0, 3);
console.log(friends);



