
'use strict';
var sccore = 0;
var userName = prompt ('Welcome to my website, Can U tell me ur name,pls?');
var userName = getValidation(userName);
alert('Nice to meet U '+userName);


var color = prompt('Do u think that I like a Green color?');
var color = getValidation(color);
var color = result(color);

//---------------------------
var drink = prompt('Do u think that I like Tea?');
var drink = getValidation(drink);
var drink = result(drink);


//-------------------------

var swim = prompt('Do u think that I can swim?');
var swim = getValidation(swim);
var swim = result(swim);

//----------------------------
var python = prompt('Do u think that I can programming by python?');
var python = getValidation(python);
var python = result(python);

//----------------------
var cat = prompt('Do u think that I like cat?');
var cat = getValidation(cat);
var cat = result(cat);

//the 6th qustion

var age = 27;
var guess = prompt("Guess my age, U have 4 attempts ");
guess= getValidation(guess);
guess = parseInt(guess);
console.log(guess);
var i = 1;

do {
    if (parseInt(guess) > age) {
        guess = prompt("You've guessed too high!");
        i++;
    } else if (parseInt(guess) < age) {
        guess = prompt("You've guessed too low!");
        i++;
    } else if(parseInt(guess) === age){
         alert("Good Job!");
        sccore++ ; }
    

} while (parseInt(guess) !== age && i<=3);
if (parseInt(guess) !== age && i>3) {
    alert('Sorr, u did not giss my age is: 27 ');
}


// the 7th qustion

var num = [1,2,3];
var gNum = prompt("Guess one of my 3 fav numbers from 1 to 10, u have 6 attempts");
gNum= getValidation(gNum);
gNum = parseInt(gNum);
console.log(gNum);
var z = 0;

for (z=0; z<6; z++) {
    switch (gNum) {
        case 1:
        case 2:
        case 3:
            alert('Correct Answer');
            z =6;
            sccore++;
            alert('My first 3 fav numbers from 1 to 10 are: '+ num);
            break;
        default:
            gNum = prompt("u have to try again: ");
            break;
        
    } 
    }


alert('Thank U '+userName+', You have made good attempts to answer questions, ur sccore was: '+ sccore+' out of 7');




// validation Function
function getValidation(userInput){

    while(userInput === undefined || userInput === '' || userInput === null){

        userInput = prompt('Can U write the answer again, pls?');
    }
    return userInput;

}

// Result Function
function result(userResult){

    if(userResult === 'yes' || userResult.toLowerCase() === 'yes' || userResult.toLowerCase() === 'y'){

        alert('Very good, This a correct answer');
        sccore ++;

    }else{
        alert('Oops thats wrong');
    }

    

}

