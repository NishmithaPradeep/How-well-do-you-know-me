var readline = require("readline-sync");
var score = 0;
var userName = readline.question("Hi !! What is your Name ?");
console.log("Let's play to know how much you know about Nishmitha !!");
console.log("-----------------");


  var question1 = {
  question : "Where did Nismitha do her B.tech ?",
  answer : "sastra"
                
  }
var question2 = {
  question : "Where is Nishmitha working currently ?",
  answer : "cognizant"
}
var question3 = {
  question : "Where is Nishmitha living currently ?",
  answer : "banglore"
}
var question4 = {
  question : "Nishmitha's favorite animal ?",
  answer : "dog"
}
var question5 = {
  question : "Which is Nishmitha's favorite color ?",
  answer : "black"
}
var nishArray = [question1 , question2 , question3 , question4 , question5];

function letsPlay(que,ans)
{
  
      var currentAnswer = readline.question(que);
      if(currentAnswer.toUpperCase() === ans.toUpperCase())
      {
        console.log("Yaaayy ! you are right !!!");
        score = score + 1;
      }
      else
      {
        console.log("oops..!!You are wrong");
      }
      console.log("-----------------");
    
}

for(var i=0;i<nishArray.length;i++)
  {
    letsPlay(nishArray[i].question,nishArray[i].answer);
  }
console.log(userName+"...you scored " + score + "/5");

