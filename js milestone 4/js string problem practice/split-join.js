const lyrics = 'Tumi bondhu kala pakhi ami jeno ki . bosonto kale tomai bolte parini. kala kala sada sada rong';
//  devide each words
const parts = lyrics.split(' '); 
// console.log(parts);

//  devide each sentences
const sentence = lyrics.split('.');
// console.log(sentence)

//  devide each and every leter/character
const char = lyrics.split('');
// console.log(char);


// const lines = [
//     'Tumi bondhu kala pakhi ami jeno ki',
//     'Bosonto kale tomai bolte parini',
//     'Kala kala sada sada rong'
// ];
// console.log(lines.join('.'))

const lines = [
    'Tumi bondhu kala pakhi ami jeno ki',
    'Bosonto kale tomai bolte parini',
    'Kala kala sada sada rong'
];
console.log(lines.join(', '))


