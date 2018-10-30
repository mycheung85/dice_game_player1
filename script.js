// counter = 0;
// get a random number
// link the random number to the dice
// when the player clicks the roll button then it generates a dice image
// the counter will keep a running accumulator of dice numbers
// if the dice rolls a one then player one loses the game 

const game = document.getElementById('roll'); 
const reset = document.getElementById('reset');
let scoreCounter = 0;

const dice = [ 
  {face: 1, image: "img/dice1.png"},
  {face: 2, image: "img/dice2.png"},
  {face: 3, image: "img/dice3.png"},
  {face: 4, image: "img/dice4.png"},
  {face: 5, image: "img/dice5.png"},
  {face: 6, image: "img/dice6.png"}
];


game.addEventListener('click', () => {
  let randomNumber = Math.floor(Math.random() * 6) + 1;
    for(let side of dice) {
      
      let imgSrc = checkFaceValue(side, randomNumber);

      if (typeof(imgSrc) != "undefined") {
        document.getElementById('dice-image').src = imgSrc;
        scoreCounter += side.face;
        checkOutcome(side);
      }
  }
  addtoHTML('score', "Score " + scoreCounter)
})

reset.addEventListener('click', () => {
  gameReset();
})


function checkFaceValue(side, randomNumber) {
  if(side.face == randomNumber) {
    return side.image
  }
}

function checkScoreValue(side) {
  if(scoreCounter >= 20) {
    return "You Win"
  } else if (side.face == 1) {
    return "You lose"
  }
}

function checkOutcome(side) {
  if(checkScoreValue(side) == "You lose") {
    addtoHTML('outcome', 'You Lose, Reset')
  } else if(checkScoreValue(side) == "You Win") {
    addtoHTML('outcome', "You Win, Reset")
  }
}

function addtoHTML(id, value) {
  document.getElementById(id).innerHTML = value;

}

function gameReset() {
  scoreCounter = 0;
  addtoHTML("score", "Score");
  addtoHTML("outcome", "");
  document.getElementById("dice-image").src = "";
} 







