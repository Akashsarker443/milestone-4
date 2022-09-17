function radianToDegree(radian){
    if (typeof radian !== 'number'){
        return 'Please enter a number';
    }
    let degree = radian * 57.2957795;
    degree = degree.toFixed(2);
    let result = parseFloat(degree);
   
    return result;
}
console.log(radianToDegree(10))



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
console.log(isJavaScriptFile('iiuoiu.js'));