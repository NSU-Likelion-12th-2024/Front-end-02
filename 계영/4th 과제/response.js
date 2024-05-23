// const testArea = document.querySelector(".testArea");
const startArea = document.querySelector(".start");
const resultDisplay = document.querySelector("#result");

let startTime;
let endTime;
let timeout;

function startTest() {
  startArea.style.backgroundColor = "#red";
  startArea.textContent = "초록색이 되면 클릭하세요";
  //   testArea.style.backgroundColor = "blue";
  startArea.removeEventListener("click", handleClick);

  const randomTime = Math.floor(Math.random() * 5000) + 2000; // 2초에서 7초 사이의 랜덤 시간

  timeout = setTimeout(() => {
    startArea.style.backgroundColor = "#2ecc71"; // 색상이 초록색으로 변함
    startTime = new Date().getTime();
    startArea.addEventListener("click", handleClick);
  }, randomTime);
}

function handleClick() {
  startArea.style.backgroundColor = "green";
  endTime = new Date().getTime();
  if (startTime) {
    const reactionTime = endTime - startTime;
    resultDisplay.textContent = `현재 ${reactionTime} ms`;
    resetTest();
  } else {
    startArea.textContent = "아직입니다 ! ";
  }
}

function resetTest() {
  clearTimeout(timeout);
  startArea.removeEventListener("click", handleClick);
  startArea.style.backgroundColor = "blue";
}

startArea.addEventListener("click", startTest);
