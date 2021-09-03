var readlineSync = require("readline-sync");
var score =0;

var highScores = [
  {
    name: "Alind",
    score: 3,
  }

]
var name =readlineSync.question("What's your name? \n")
console.log("HI "+name +"\nLet's play a game to know how well you know Alind")
//To use uppercase take care of brackets as in userAnswer.toUpperCase()

function play(question,answer){
  var userAnswer=readlineSync.question(question);
  if(userAnswer.toUpperCase()==answer.toUpperCase()){
    console.log("your Answer is Right")
    score++;
  
  }else{
    console.log("Sorry you're wrong");
  }
  console.log("Your Score is: "+ score);
  console.log("question is: "+question + " Answer is: "+ answer)
  console.log("--------")
  
}
var askingQuestions=[
  {
    question: "Where I live?\n",
    answer: "chhatarpur"
  },
  {
    question: "In which city i did my graduation?\n",
  answer:"sagar"},
  {question:"What is my Branch?\n",
  answer:"mechanical"}
  ,{
    question: "What is name of my school where i did my 12Th?\n"
   ,answer: "Maharishi vidya mandir"
  },
  {
    question:"What is my cgpa?\n"
    ,answer: "7.83"
  },
  {
    question: "What is name of my Hostel during graduation?\n"
    ,answer:"parimal"
  }
  ]
for(var i=0; i<askingQuestions.length;i++){
  var currentQuestion= askingQuestions[i]
  play(currentQuestion.question , currentQuestion.answer);
}
// function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

for(var j=0; j<highScores.length; j++){
  var currentScore = highScores[j]
  console.log(currentScore.name+ ":  "+currentScore.score);

}
  

//   highScores.map(score => console.log(score.name, " : ", score.score))
//   console.log
// // }