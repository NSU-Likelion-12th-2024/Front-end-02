const state = document.querySelector("#state");
const form = document.querySelector("#form");
const alertPass = document.createElement("li");

let begin;
let end;
let time;
const records = [];
state.addEventListener("click", (event) => {
  if (event.target.classList.contains("ready")) {
    state.classList.replace("ready", "stop");
    state.textContent = "초록색이되면 클릭하세요";
    setTimeout(() => {
      state.classList.replace("stop", "go");
      state.textContent = "클릭하세요!";
      begin = new Date();
    }, Math.floor(Math.random() * 2000) + 100);
  } else if (event.target.classList.contains("stop")) {
    state.classList.replace("stop", "ready");
    state.textContent = "너무 성급하시군요!";
  } else if (event.target.classList.contains("go")) {
    end = new Date();
    time = end - begin;
    records.push(time);
    const average = records.reduce((a, b) => a + b) / records.length;
    alertPass.textContent = "현재: " + time + "ms, 평균: " + average + "ms";
    form.appendChild(alertPass);
    state.classList.replace("go", "ready");
    state.textContent = "클릭해서 시작하세요.";
  }
});
