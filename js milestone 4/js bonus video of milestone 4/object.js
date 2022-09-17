const nayok = {
    name: 'sakib khan',
    address: 'movie cinema',
    isSingle: true,
    friends: ['apu', 'raz', 'salman', 'amir'],
    movie:[{name: 'no 1 sakib khan', year: 2015}, {name: 'king khan', year: 2018}],
    act: function(){
        console.log('acting like Sakib khan');
    },
    car:{
        brand:'tesla',
        price: 5000000,
        made: 2025,
        manufacturer:{
            name: 'tesla',
            ceo: 'elon musk',
            country: 'usa'
        }
    }
}
// console.log(nayok.act());
nayok.act();

console.log(nayok.car);


