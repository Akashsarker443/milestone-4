// const phones = [
//     { name:'samsung', camera: 12, Storage:'32gb', price: 36000, color:'silver'},
//     { name:'vivo', camera: 12, Storage:'32gb', price: 16000, color:'silver'},
//     { name:'oppo', camera: 12, Storage:'32gb', price: 26000, color:'silver'},
//     { name:'iphone', camera: 12, Storage:'32gb', price: 96000, color:'silver'},
//     { name:'oneplus', camera: 12, Storage:'32gb', price: 46000, color:'silver'},
//     { name:'realme', camera: 12, Storage:'32gb', price: 28000, color:'silver'},
      

// ];

// function cheapestPhone(phones){
//     let cheapest = phones [0];
//     for ( i = 0; i < phones.length; i++){
//         const phone = phones[i];
//         if (phone.price < cheapest.price){
//             cheapest = phone;
            
//         }
//     }
//     return cheapest;

// }

// const expectedPhone = cheapestPhone(phones);
// console.log(expectedPhone, 'is the cheapest phone')





// check which phone has the lowest camera

const phones = [
    { name:'samsung', camera: 32, Storage:'32gb', price: 36000, color:'silver'},
    { name:'vivo', camera: 62, Storage:'32gb', price: 16000, color:'silver'},
    { name:'oppo', camera: 52, Storage:'32gb', price: 26000, color:'silver'},
    { name:'iphone', camera: 12, Storage:'32gb', price: 96000, color:'silver'},
    { name:'oneplus', camera: 82, Storage:'32gb', price: 46000, color:'silver'},
    { name:'realme', camera: 18, Storage:'32gb', price: 28000, color:'silver'},
      

];

function cheapestPhone(phones){
    let cheapest = phones [0];
    for ( i = 0; i < phones.length; i++){
        const phone = phones[i];
        if (phone.camera < cheapest.camera){
            cheapest = phone;
            
        }
    }
    return cheapest; 

}

const expectedPhone = cheapestPhone(phones);
console.log(expectedPhone, 'is the cheapest phone')




