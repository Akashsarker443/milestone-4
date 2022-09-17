function maxInArray(numbers){
    let largest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        if(element > largest){
            largest = element;
        }
    }
    return largest;

}


const height = [222, 944, 55, 166, 122, 87];
const tallest = maxInArray(height);
console.log('tallest person is', tallest);