window.addEventListener("load", init);

// Global variables
let currentLevel = 5;
let time = currentLevel;
let score = 0;
let isPlaying;
//DOM
const wordInput = document.querySelector("#word-input");
const CurrentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");

const words = [
  "playground",
  "pleasure",
  "plot",
  "plough",
  "pocket",
  "point",
  "poison",
  "pollution",
  "popcorn",
  "porter",
  "position",
  "pot",
  "potato",
  "powder",
  "power",
  "price",
  "produce",
  "profit",
  "property",
  "prose",
  "protest",
  "pull",
  "pump",
  "punishment",
  "purpose",
  "push",
  "quarter",
  "quartz",
  "queen",
  "question",
  "quicksand",
  "quiet",
  "quill",
  "quilt",
  "quince",
  "quiver",
  "rabbit",
  "rabbits",
  "rail",
  "railway",
  "rain",
  "rainstorm",
  "rake",
  "range",
  "rat",
  "rate",
  "ray",
  "reaction",
  "reading",
  "reason",
  "receipt",
  "recess",
  "record",
  "regret",
  "relation",
  "religion",
  "representative",
  "request",
  "respect",
  "rest",
  "reward",
  "rhythm",
  "rice",
  "riddle",
  "rifle",
  "ring",
  "rings",
  "river",
  "road",
  "robin",
  "rock",
  "rod",
  "roll",
  "roof",
  "room",
  "root",
  "rose",
  "route",
  "rub",
  "rule",
  "run",
  "sack",
  "sail",
  "salt",
  "sand",
  "scale",
  "scarecrow",
  "scarf",
  "scene",
  "scent",
  "school",
  "science",
  "scissors",
  "screw",
  "sea",
  "seashore",
  "seat",
  "secretary",
  "seed",
  "selection",
  "self",
  "sense",
  "servant",
  "shade"
];
//initialize game
function init() {
  //Show number of seconds
  seconds.innerHTML = currentLevel;
  //LOad word from array
  showWord(words);

  //Start mathcing on word
  wordInput.addEventListener("input", startMatch);
  //call countdown
  setInterval(countdown, 1000); // repeat every second

  //Check game status
  setInterval(checkStatus, 50);
}

//start
function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = "";
    score++;
  }
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

// match creent word to word input
function matchWords() {
  if (wordInput.value.toLowerCase() === CurrentWord.innerHTML) {
    message.innerHTML = "Correct!!";
    return true;
  } else {
    message.innerHTML = "";
    return false;
  }
}

//pick & show word
function showWord(words) {
  //Generate random index
  const randindex = Math.floor(Math.random() * words.length);
  // out the random word
  CurrentWord.innerHTML = words[randindex];
}

//count timer
function countdown() {
  //Make sure time is not run out
  if (time > 0) {
    //Decrement
    time--;
  } else if (time === 0) {
    //game is over
    isPlaying = false;
  }
  //Show time
  timeDisplay.innerHTML = time;
}

//check game status
function checkStatus() {
  if (!isPlaying && time == 0) {
    message.innerHTML = "Game Over";
    score = -1;
  }
}
