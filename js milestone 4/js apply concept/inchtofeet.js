// const myInch = 120;
// const myFeet = myInch / 12;
// console.log(myFeet)


// const dadaInch = 156;
// const dadaFeet = dadaInch / 12;
// console.log(dadaFeet)



function inchToFeet (inches){
    const feet = inches / 12;
    return feet;
}

const dadaInches = 106;
const dadaFeet = inchToFeet(dadaInches);
console.log(dadaFeet);