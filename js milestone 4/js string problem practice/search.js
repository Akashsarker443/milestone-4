const lyrics = 'Tumi bondhu kala pakhi ami jeno ki . bosonto kale tomai bolte parini. kala kala sada sada rong';

const searchString = 'PAkhi';
const searchStringLower = searchString.toLowerCase();
// const doesexist = lyrics.includes('pakhi');

// const doesexist = lyrics.includes(searchString);

const lyricsLower = lyrics.toLowerCase();

const doesexist = lyricsLower.includes(searchStringLower);



console.log(doesexist);

//  how to find index of from string
console.log(lyrics.indexOf('ami'))
console.log(lyrics.indexOf('Tumi'))

if(lyrics.indexOf('sada') !== -1){
    console.log('exists inside the string')
}
else{
    console.log('cannot find it');
}
// 
if(lyrics.indexOf('sadada') !== -1){
    console.log('exists inside the string')
}
else{
    console.log('cannot find it');
}

//  startswith and endendswith

console.log(lyrics.startsWith('Tumi'));
console.log(lyrics.endsWith('rongi'));