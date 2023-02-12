let canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  canvasParent = document.querySelector(".canvas-parent"),
  parentHeight = canvasParent.clientHeight,
  parentWidth = canvasParent.clientWidth;

canvas.height = parentHeight;
canvas.width = parentWidth;

context.textAlign = "center";
context.textBaseline = "middle";
context.fillText("Click in this area", canvas.width / 2, canvas.height / 2);

let start = document.getElementById("start"),
  timeText = document.getElementById("time-text");

let gameStatus = {
  STOP: 1,
  START: 2,
};

let status = gameStatus.STOP;

function getRandomTime(min, max) {
  let result = Math.floor(Math.random() * Math.floor(max)) + min;
  result = result * 1000;
  return result;
}

function endGame() {
  clearTimeout(timeout1);
  clearTimeout(timeout2);
  canvas.style.background = "rgb(237,255,172)";
  start.innerHTML = "Start Game";
  status = gameStatus.STOP;
}

function timeoutFunction1(time) {
  timeout1 = setTimeout(function () {
    canvas.style.background = "rgb(78,197,78)";
    let date1 = new Date();
    timeNow = date1.getTime();
    canvas.addEventListener("click", function () {
      let date2 = new Date();
      timeLater = date2.getTime();
      playTime = timeLater - timeNow;
      timeText.innerHTML = playTime + " ms";
    });
  }, time);
}

function timeoutFunction2(time) {
  timeout2 = setTimeout(function () {
    endGame();
  }, time);
}

function startGame() {
  let changeTime = getRandomTime(1, 8);
  let endTime = changeTime + 5000;
  status = gameStatus.START;
  canvas.style.background = "rgb(206,63,63)";
  timeoutFunction1(changeTime);
  timeoutFunction2(endTime);
}

start.addEventListener("click", function () {
  if (status === gameStatus.START) {
    endGame();
  } else {
    startGame();
    this.innerHTML = "Stop Game";
  }
});

canvas.addEventListener("click", function () {
  endGame();
});
