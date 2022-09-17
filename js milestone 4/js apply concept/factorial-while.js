function factorial(number){
    let num = 1;
    let result = 1;
    while(num <= number){
        result = result * num;
        num ++;
        
    }
    return result;
}
const numberInput = 6;
const fact = factorial(numberInput);
console.log(fact);