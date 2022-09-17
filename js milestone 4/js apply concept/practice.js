function getSumOfAnArray(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        sum = sum + element;
        // console.log(i, element, sum);
    }
    return sum;

}

function getOddnumbersOfAnArray(numbers){
    const oddNumbers =[];
    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        if(element % 2 !== 0){

            console.log(i, element)
            oddNumbers.push(element);
        }
    }
    return oddNumbers;

}

const myNumbers = [12, 65, 45, 78, 32, 45, 91];
// const totalSum = getSumOfAnArray(myNumbers);
// console.log('your total sum of this array:', totalSum);



const oddNumbers = getOddnumbersOfAnArray(myNumbers);
console.log(oddNumbers);
const oddsum =getSumOfAnArray(oddNumbers);
console.log(oddsum)

