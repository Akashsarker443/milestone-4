//  how to find the sum of all odds numbers of an array
function getOddnumbersOfAnArray(numbers){
    const oddNumbers =[];
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        if(element % 2 !== 0){
            sum = sum + element;
            console.log(i, element, sum)
            oddNumbers.push(element);
        }
    }
    return {oddNumbers, 
            sum     };
}

const myNumbers = [12, 65, 45, 78, 32, 45, 91];
const oddNumbers = getOddnumbersOfAnArray(myNumbers);
console.log(oddNumbers);