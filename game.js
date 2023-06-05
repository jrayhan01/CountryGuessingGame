const filtered = Object.values(JSON.parse(sessionStorage.getItem("filtered")));
const answersDiv = document.getElementById("answers-div");
const flag = document.getElementById("country-flag");
const round_disp = document.getElementById("round-display");
const score_disp = document.getElementById("score-display");

const score = parseInt(sessionStorage.getItem("score"));
const currentRound = parseInt(sessionStorage.getItem("current-round"));
const maxRounds = parseInt(sessionStorage.getItem("max-rounds"));
const previousChoices = Object.values(JSON.parse(sessionStorage.getItem("previousChoices")));

const answerChoices = [];

round_disp.innerHTML = `Round ${sessionStorage.getItem("current-round")}/${sessionStorage.getItem("max-rounds")}`;
score_disp.innerHTML = `Score: ${sessionStorage.getItem("score")}`

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomCountry() {
  return filtered[getRandomInt(0, Object.values(filtered).length-1)];
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

let randomCountry;
do {
  randomCountry = getRandomCountry();
} while(previousChoices.includes(randomCountry[0]));

previousChoices.push(randomCountry[0]);
sessionStorage.setItem('previousChoices', JSON.stringify(previousChoices));

flag.src = randomCountry[2];

answerChoices.push(randomCountry[0]);

const prevAnswerChoices = [];
let cnt = 0;

while (cnt < 3) {
  let r = getRandomCountry();
  if(r[0] !== randomCountry[0] && !prevAnswerChoices.includes(r[0])) {
    answerChoices.push(r[0]);
    prevAnswerChoices.push(r[0]);
    cnt++;
  }
}

shuffleArray(answerChoices);

for (const choice of answerChoices) {
  const input = document.createElement("input");
  input.type = "radio";
  input.name = "answerChoices";
  input.id = choice;
  input.value = choice;

  const label = document.createElement("label");
  label.htmlFor = choice;
  label.innerHTML = choice;

  answersDiv.appendChild(input);
  answersDiv.appendChild(label);
  answersDiv.appendChild(document.createElement("br"));
}

function endGame() {
  window.location.href = "end.html";
}

function clickSubmit() {

  let selected = "";
  const choices = document.getElementsByName("answerChoices");

  for (let i = 0; i < choices.length; i++) {
    if (choices[i].checked) {
      selected = choices[i].value;
    }
  }

  if (randomCountry[0] == selected) {
    alert("You got the right answer!");
    sessionStorage.setItem("score", score + 1);
  } else {
    alert(`Wrong answer! The correct answer was: ${randomCountry[0]}`);
  }

  if (currentRound == maxRounds) {
    alert("The game has ended!");
    window.location.href = "end.html";
  } else {
    sessionStorage.setItem("current-round", currentRound + 1);
    location.reload();
  }
}