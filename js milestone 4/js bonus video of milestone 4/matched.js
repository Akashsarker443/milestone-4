// const numbers = [45, 55, 23, 98,19];

// for (let i = 0; i <numbers.length; i++){
//     const number = numbers[i];
//     console.log(number);
// }


//  simplified version of the above function . it will do same work

// const numbers = [45, 55, 23, 98,19];
// for(const number  of numbers){
//     console.log(number);
// }



const products = [
    {id: 1, name: 'iphone 8 plus', price:120000},
    {id: 2, name: 'samsung 8 plus', price:90000},
    {id: 3, name: 'realme 8 plus', price:40000},
    {id: 4, name: 'iphone 6 plus', price:20000},
    {id: 5, name: 'walton 8 plus', price: 35000},

];
for( const product of products){
    console.log(product);
}



//  finding matching products

// const products = [
//         {id: 1, name: 'iphone 8 plus', price:120000},
//         {id: 2, name: 'samsung 8 plus', price:90000},
//         {id: 3, name: 'iphone 6 plus', price:20000},
//         {id: 4, name: 'walton 8 plus', price: 35000},
//         {id: 5, name: 'walton new laptop', price:40000},
//         {id: 6, name: 'dell inspiration laptop', price:30000},
//         {id: 7, name: 'mac book air laptop', price:140000},
//         {id: 8, name: 'lenovo yoga laptop', price:70000},
    
//     ];

//     function matchProducts(products, search){
//         const matched = [];
//         for(const product of products){
//             if (product.name.toLowerCase().includes(search.toLowerCase())){
//                 matched.push(product);
//             }

//         }
//         return matched;
//     }
//     const result = matchProducts(products, 'laptop');
//     console.log(result);