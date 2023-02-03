let canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  canvasParent = document.querySelector(".canvas-parent"),
  parentHeight = canvasParent.clientHeight,
  parentWidth = canvasParent.clientWidth;

canvas.height = parentHeight;
canvas.width = parentWidth;

context.textAlign = "center";
context.textBaseline = "middle";
context.fillText("Click in this area", canvas.height / 2, canvas.width / 2);

let start = document.getElementById("start"),
  timeText = document.getElementById("time-text");

let gameStatus = {
  STOP: 1,
  START: 2,
};

let status = gameStatus.STOP;

function getRandomTime(min, max) {
  let result = Math.floor(Math.random() * Math.floor(max)) + 1;
  result = result * 1000;
  console.log(result);
  return result;
}

function endGame() {}

function startGame() {
  let changeTime = getRandomTime(1, 8);
  let endTime = changeTime + 5000;
  status = gameStatus.START;
  canvas.style.background = "rgb(206,63,63)";
}

start.addEventListener("click", function () {
  if (status === gameStatus.START) {
    endGame();
  } else {
    startGame();
    this.innerHTML = "Stop Game";
  }
});
