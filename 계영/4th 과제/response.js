// const testArea = document.querySelector(".testArea");
const startArea = document.querySelector(".start");
const resultDisplay = document.querySelector("#result");

let startTime;
let endTime;
let timeout;

function startTest() {
  startArea.textContent = "초록색이 되면 클릭하세요";
  //   testArea.style.backgroundColor = "blue";
  startArea.style.backgroundColor = "red";
  startArea.removeEventListener("click", handleClick);

  const randomTime = Math.floor(Math.random() * 5000) + 2000; // 2초에서 7초 사이의 랜덤 시간

  timeout = setTimeout(() => {
    startArea.style.backgroundColor = "#2ecc71"; // 색상이 초록색으로 변함
    startTime = new Date().getTime();
    startArea.addEventListener("click", handleClick);
  }, randomTime);
}

function handleClick() {
  endTime = new Date().getTime();
  const reactionTime = endTime - startTime;
  resultDisplay.textContent = `Your reaction time is ${reactionTime} ms`;
  resetTest();
}

function resetTest() {
  clearTimeout(timeout);
  startArea.removeEventListener("click", handleClick);
  startArea.style.backgroundColor = "#3498db";
}

startArea.addEventListener("click", startTest);
