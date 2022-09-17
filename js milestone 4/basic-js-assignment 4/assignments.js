/*--------Assignment problem solving 1 -------- */

function radianToDegree(radian){
    if (typeof radian !== 'number'){
        return 'Please enter a number';
    }
    let degree = radian * 57.2957795;
    degree = degree.toFixed(2);
    let result = parseFloat(degree);
   
    return result;
}



/*--------Assignment problem solving 2 -------- */

function isJavaScriptFile(string){
    if (typeof string !== 'string'){
        return 'please enter a valid file name'
    }
    const stringLower = string.toLowerCase();
    if(stringLower.endsWith('.js')){
        return true;
    }
    else{
        return false;
    }
   
      
}




/*--------Assignment problem solving 3 -------- */

function oilPrice(dieselQuantity, petrolQuantity, octaneQuantity){

    if (typeof dieselQuantity !== 'number' || typeof petrolQuantity !== 'number' || typeof octaneQuantity !== 'number'){
        return 'Please enter a number';
    }
    
    const  perLiterDieselPrice = 114;
    const  perLiterPetrolPrice = 130;
    const  perLiterOctanePrice = 135;

    const dieselCost = dieselQuantity * perLiterDieselPrice;
    const petrolCost = petrolQuantity * perLiterPetrolPrice;
    const octaneCost = octaneQuantity * perLiterOctanePrice;
     
    const totalcost = dieselCost + petrolCost + octaneCost;

    return totalcost;

}


  
/*--------Assignment problem solving  4-------- */

function publicBusFare(passenger){
    if (typeof passenger !== 'number'){
        return 'Please enter a number';
    }
    const reservedBusCapacity = 50;
    const microbusCapasity = 11;
    
    const publicBusFare = 250;
    if (passenger >= 50){
        const microBusPassenger = passenger % reservedBusCapacity;
        const restPassenger = microBusPassenger % microbusCapasity;
        const restPassengerTotalcost = restPassenger * publicBusFare;

        return restPassengerTotalcost;
    }
    else if (passenger < 50){
        const restPassenger = passenger % microbusCapasity;
        const restPassengerTotalcost = restPassenger * publicBusFare;
        return restPassengerTotalcost;
    }

   

}




/*--------Assignment problem solving  5-------- */


function isBestFriend(person1, person2){
    if (typeof person1 !== 'object' || typeof person2 !== 'object'){
        return 'You must enter object';
    }
    person1.name = person1.name.toLowerCase();
    person1.friend = person1.friend.toLowerCase();
    person2.name = person2.name.toLowerCase();
    person2.friend = person2.friend.toLowerCase();

    if (person1.name === person2.friend && person2.name === person1.friend ){
        return true;
    }
    else{
        return false;
    }

}

