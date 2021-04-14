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
    question: "4. Which superhero is blinded by radioactive components and nicknamed the “Man without fear”? ",
    answer: "daredevil",
    options: ["daredevil", "green lantern", "wolverine"]
  },{
    question: "5. Which superhero has super tools such as the magic lasso and bullet-proof bracelets? ",
    answer: "wonder woman",
    options: ["super girl", "wonder woman", "catwomen"]
  },
  {
    question: " 6.In addition to Hal Jordan and Alan Scott, The Green Lantern also uses which name as a secret identity? ",
    answer: "Kyle Rayner",
    options: ["Kyle Rayner", "Barry Allen","Britt Reid"]
  },
  {
    question: "7. Which character is usually romantically paired with Batman? ",
    answer: "catwomen",
    options: ["catwomen","the black canary", "hawkgirl"]
  },
  {
    question: "8. Who was the first female superhero of the Justice Society of America? ",
    answer:"wonder women",
    options: ["electra", "wonder women", "storm"]
  },
  {
    question: "9. What villain got his distinctive appearance from toxic chemicals at a plant? ",
    answer: "joker",
    options: ["doomsday", "two face", "joker"]
  },
  {
    question: "10. Raymond Palmer is the alter ego of which superhero? ",
    answer: "the atom",
    options: ["the atom", "the green arrow", "hawkman"]
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
  if(i===3) {
    console.log(chalk.bold.bgCyan("------Level-2-------"));
  }
  if(i===6) {
    console.log(chalk.bold.bgBlue2("------Level-3-------"));
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