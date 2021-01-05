/*
'use strict';

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


alert('Thank U '+userName+', You have made good attempts to answer questions');




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

        alert('Very good, I like a Green color');

    }else{
        alert('Oops thats wrong');
    }

    

}

*/