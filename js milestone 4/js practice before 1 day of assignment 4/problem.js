function GetMultipication(number){
    let sum = 0;
    
    const total = [];
    for(let i = 1; i <= 10; i++){
       const result = number * i;
        sum = sum + result;

       console.log(result);
       total.push(result);
       

    }
    return { total, sum};    
}
const output = GetMultipication(12
    );
console.log(output);