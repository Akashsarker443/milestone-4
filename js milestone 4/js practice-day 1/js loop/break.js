for(i = 0; i<= 20; i++){
    console.log(i)
  if(i >= 10){
    break;
  }

}


var friends =['Shohel', 'Alal', 'Isan', 'Emran'];
for(var i = 0; i<friends.length; i++){
    var friend = friends[i];
    if(friend == 'Alal'){
        break;
    }
    console.log(friend)
}

var numbers = [12, 23, 45, 34, 34, 66, 88, 77, 66, 53, 23];
 
for(var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    if(number > 45){
        break;
    }
    console.log(number)
}
