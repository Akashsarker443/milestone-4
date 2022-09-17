const result = Math.pow(3, 3);
console.log(result)


//  with math.abs

// const num1 = 25;
// const num2 = 45;
// const gap = Math.abs(num1 - num2);
// console.log(gap);
// //   Math.abs() use korle gap ar man -ar ba +ar jai hok na ken ta +ar man hisabe dore nibe fole kono problem hobe na. kinto ata use na korle num1 jodi num2  theke choto hoi tahole -ar man asbe ja 5 theke choto fole kisota problem hobe.
// if (gap < 5){
//     console.log('You guys can be friends');
// }
// else{
//     console.log('you guys stay apart');
// }


//  without math.abs

const num1 = 25;
const num2 = 45;
const gap =(num1 - num2);
console.log(gap);
//  akhane 25 ar 45 ar modde gap 20 . so ata 'you guys stay apart' print korer kotha kinto ata 1st ta print kortase karon akhane gap ar man ta -ar asche . karon 25 theke 45 biyog dile normally -20 hobe ja 5 theke choto.
if (gap < 5){
    console.log('You guys can be friends');
}
else{
    console.log('you guys stay apart');
}



// -----------

// -----------


// const number = 2.4589;
//  .5 ar niche hole sodo porno songkha ta dekhabe 
// const fullNumber = Math.round(number);
// console.log(fullNumber);



const number = 6.5589;
//  .5 ba ar opore hole next porno songkha ta dekhabe 
const fullNumber = Math.round(number);
console.log(fullNumber);

// const num = 3.0002;
// const result2 =Math.ceil(num);
// // Math.ceil() use korle sob somoi next porno songkha dekhabe 
// console.log(result2);



const num = 9.0002;
const result2 =Math.floor(num);
// Math.floor() use korle sob somoi sodo porno songkha dekhabe 
console.log(result2);



//  random == akek somoi akek man dibe 

// const random = Math.random();
// console.log(random)


// const random = Math.random()*100;
// // ai khettre 100 porjonto songkha dekhabe[*10 hole 10, *6 hole 6 porjonto dekhabe] tobe dosomic soho tai  Math.round ar bitore rakhte hobe 
// console.log(random)

const random = Math.round(Math.random()*6);
console.log(random);

