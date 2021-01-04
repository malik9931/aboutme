'use strict';

var userName = prompt ('Welcome to my website, Can U tell me ur name,pls?');
while (userName === null || userName === ""){
    alert('pls insert an answer');
    userName = prompt('Can U tell me ur name,pls?');
}
alert('Nice to meet U '+userName);


var color = prompt('Do u think that I like a Green color?');
var testColor = 'yes';
while (color === null || color === ""){
    alert('pls insert an answer');
    color = prompt('Do u think that I like a Green color?');
}
// 1
if (color === testColor || color.toLowerCase() === testColor || color.toLowerCase() === 'y'){
    // console.log(color === testColor || color.toLowerCase() === testColor);
    alert('Very good, I like a Green color');

}else{
    alert('Oops thats wrong');
}

//---------------------------
var drink = prompt('Do u think that I like Tea?');
var testDrink = 'yes';
while (drink === null || drink === ""){
    alert('pls insert an answer');
    drink = prompt('Do u think that I like Tea?');
}
// 2
if (drink === testDrink || drink.toLowerCase() === testDrink || drink.toLowerCase() === 'y'){
    // console.log(drink === testDrink || drink.toLowerCase() === testDrink);
    alert('Very good, I like Tea');

}else{
    alert('Oops thats wrong');
}

//-------------------------

var swim = prompt('Do u think that I can swim?');
var testSwim = 'yes';
while (swim === null || swim === ""){
    alert('pls insert an answer');
    swim = prompt('Do u think that I can swim?');
}
// 3
if (swim === testSwim || swim.toLowerCase() === testSwim || swim.toLowerCase() === 'y'){
    // console.log(swim === testSwim || swim.toLowerCase() === testSwim);
    alert('Very good, I can swim');

}else{
    alert('Oops thats wrong');
}

//----------------------------
var python = prompt('Do u think that I can programming by python?');
var testPython = 'yes';
while (python === null || python === ""){
    alert('pls insert an answer');
    python = prompt('Do u think that I can programming by python?');

}
// 4
if (python === testPython || python.toLowerCase() === testPython || python.toLowerCase() === 'y'){
    // console.log(python === testPython || python.toLowerCase() === testPython);
    alert('Very good, I can programming by python');

}else{
    alert('Oops thats wrong');
}

//----------------------
var cat = prompt('Do u think that I like cat?');
var testCat = 'yes';
while (cat === null || cat === ""){
    alert('pls insert an answer');
    cat = prompt('Do u think that I like cat?');

}
// 5
if (cat === testCat || cat.toLowerCase() === testCat || cat.toLowerCase() === 'y'){
    // console.log(cat === testCat || cat.toLowerCase() === testCat);
    alert('Very good, I can programming by python');

}else{
    alert('Oops thats wrong');
}



alert('Thank U '+userName+', You have made good attempts to answer questions');