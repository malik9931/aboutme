
'use strict';

var userName = prompt ('Welcome to my website, Can U tell me ur name,pls?');

alert('Nice to meet U '+userName);

var score = 0;

var color = prompt('Do u think that I like a Green color?');
var color = getValidation(color);
var color = result(color,'great this is my color','NOOOOOOOOO');

//---------------------------
var drink = prompt('Do u think that I like Tea?');
var drink = getValidation(drink);
var drink = result(drink,'I LOVE IT','NOOOOOOOOO');


//-------------------------

var swim = prompt('Do u think that I can swim?');
var swim = getValidation(swim);
var swim = result(swim,'water is life','NOOOOOOOOO');

//----------------------------
var python = prompt('Do u think that I can programming by python?');
var python = getValidation(python);
var python = result(python,'its amazing','NOOOOOOOOOO');

//----------------------
var cat = prompt('Do u think that I like cat?');
var cat = getValidation(cat);
var cat = result(cat,'Its a qute animal','NOOOOOO');

//the 6th qustion


var age = 27;
var guess = prompt("Guess my age, U have 4 attempts ");
guess = parseInt(guess);
console.log(guess);
var ageGiss = numberGiss(guess,age);



// the 7th qustion

var num = [1,2,3];
var gNum = prompt("Guess one of my 3 fav numbers from 1 to 10, u have 6 attempts");
var reqResult = arrayFunction(num,parseInt(gNum));
alert(' the answers is '+ num);


alert('Thank U '+userName+', You have made good attempts to answer questions, ur sccore was: '+ score+' out of 7');



// validation Function
function getValidation(userInput){

    while (userInput === null || userInput === undefined || userInput === '') {
      alert('please answer');
        userInput = prompt('U have to put an answer?');
    // console.log(license)
    }
    
    while (userInput.toLowerCase() !== 'yes' && userInput.toLowerCase() !== 'no' && userInput.toLowerCase() !== 'y' && userInput.toLowerCase() !== 'n')
    {
        alert('please answer');
          userInput = prompt('U have to put yes / no / y / n?');
      // console.log(license)
      }
      return userInput;
    
}
  
// Result Function
function result(userResult,massege1,massege2){
  
   
    if (userResult.toLowerCase() === 'yes' || userResult.toLowerCase() === "y" )  {
      console.log(userResult.toLowerCase() === 'yes' || userResult.toLowerCase() === 'yes');
      alert(massege1);
      score++;
    }
  
    else if (userResult.toLowerCase() === "no" || userResult.toLowerCase() === "n"){
      alert(massege2);
    // console.log(license)
    }
    
  
}
  
  

// Gissing Number Function
  
  
  
function numberGiss(userNumber,myNumber) {
    
  var i;
  for (i = 1; i <= 4; i++) {
    console.log(userNumber);
    if (userNumber == myNumber) {
      alert('Right its' + myNumber);
      console.log('true');
      score++;
      break;
    }
    else if (userNumber > myNumber) {
      alert('sorry that is too hight you try ' + i + ' time');
      
      console.log('false');
    }
    else if (userNumber < myNumber) {
      alert('sorry that is too low you try ' + i + ' time');
      console.log('false');
    }
   userNumber = prompt('try another time a to guess my age, you did ' + i + ' try out of 4');
   
  if(userNumber == myNumber){
    alert('correct');
    
    break;
  }
   if(i==3){
    alert('sorry, The answer is ' + myNumber);
    break; 
  }
  }
    
}
  
  
  // Array Function
 function arrayFunction(myArray,gisser) {
  var z = 0;
  var correctAnswer=false;
   
  //  console.log(z<=5 && !correctAnswer); 
    while(z<=5 && !correctAnswer){
      

      while (isNaN(gisser)){
        gisser = prompt('U have to write a number only:');
       }
      
      
      for(var a = 0; a < myArray.length; a++){
        if(gisser==myArray[a]){
      
          alert('that is correct');
  
          correctAnswer=true;
          score++;
      
         break;
  
        }
          
          
  
      }
      if(correctAnswer==false){
      gisser = prompt ('try another Number:');
      gisser = parseInt(gisser);
    }
    
    z++;
  }
  
 
      
}