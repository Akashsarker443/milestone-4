function reverseWords(str){
    const words = str.split(' ');
    console.log(words);
    const reverse = [];
    // [ '', 'I', 'am', 'a', 'good', 'boy' ]
    for (let i = words.length - 1; i >= 0; i--){
        const element = words[i];
        console.log(element);
        reverse.push(element);

    }
    const concating = reverse.join(' ');
    return concating;
}

const mystring = 'I am a good boy';
const result = reverseWords(mystring);
console.log(result);