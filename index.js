var readLineSync = require("readline-sync");
var chalk = require("chalk");

var currentScore = 0;
var highScore = [0];
var questions = [
  {
    question: "1. The Man of Steel is another name for which superhero? ",
    answer: "superman",
    options: ["batman", "ironman", "superman"]
  },
  {
    question: "2. What is the real name of Batman? ",
    answer: "bruce waine",
    options: ["bruce devon", "bruce davis", "bruce waine"]
  },
  {
    question: "3. Batman protects which city? ",
    answer: "gotham city",
    options: ["metropolis", "chicago", "gotham city"]
  },
  {
    question: "4. How did Spiderman have his superpowers? ",
    answer: "bitten by spider",
    options: ["born with superpowers", "affected by chemicals", "bitten by spider"]
  }
];

var title = chalk.bold.bgCyanBright;

console.log(title("-----Welcome to DC Fan Quiz-----"))
function quizGame(input, answer) {
  if (input === answer) {
    console.log(chalk.bold.bgGreen("Correct !"));
    currentScore = currentScore + 1;
    if(currentScore > highScore[0]) {
      highScore[0] = currentScore;
    }
    
  } else {
    console.log(chalk.bold.bgRed("Incorrect !"));
  }
}

for (var i = 0; i < questions.length; i++) {
  if(i===5) {
    console.log("------Level-2-------");
  }
  if(i===10) {
    console.log("------Level-3-------");
  }
  var ques = questions[i].question;
  var quizQues = chalk.bold.blueBright(ques);
  var ans = questions[i].answer;
  var options = questions[i].options;
  var index = readLineSync.keyInSelect(options, quizQues);
  var input = options[index];
  quizGame(input, ans);

}
console.log("Your Current Score is :" + currentScore);
console.log("High Score " + highScore[0]);