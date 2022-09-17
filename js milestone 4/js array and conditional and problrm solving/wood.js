/* 
fixed per item wood requirements 
1. chair ----> 3 cft
2. table ---> 10 cft 
3. bed --> 50 cft 


*/


function woodCalculator(chairQuanty, tableQuanty, bedQuanty){
    const perChairWood = 3; 
    const perTableWood = 10; 
    const perBedrWood = 50; 

    const chairwood  = chairQuanty * perChairWood;
    const tablewood = tableQuanty * perTableWood;
    const bedwood = bedQuanty * perBedrWood;

    const totalwood = chairwood + tablewood + bedwood;
    return totalwood;
}

const totalwood = woodCalculator(10, 2, 1);
console.log(totalwood);