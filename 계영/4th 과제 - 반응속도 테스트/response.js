/*변수.classList.contains("클래스이름"); 를 사용하면 
변수 안에 클래스명이 존재하는지 판단후 true/false를 리턴*/

// 클릭시 화면 전환
// waiting일때 베이지, ready일때 빨간색 , now일때 파란색
document.addEventListener("DOMContentLoaded", () => {
  const screen = document.querySelector("#screen");
  const result = document.querySelector("#result");

  let startTime; //시작시간
  let endTime; //끝나는 시간
  let responseTime; //측정시간
  let records = []; //평균 반응속도 구하기 빈 배열 이용
  let timeoutId; //setTimeout 함수 담는 변수

  screen.addEventListener("click", () => {
    if (screen.classList.contains("waiting")) {
      screen.classList.replace("waiting", "ready");
      screen.textContent = "파란색이 되면 클릭하세요";
      timeoutId = setTimeout(() => {
        /* setTimout으로 2~3초 사이에 랜덤으로 클래스명이 바뀌면서 배경이
      now 배경으로 전환됨*/
        screen.classList.replace("ready", "now");
        screen.textContent = "클릭 하세요";
        startTime = new Date();
      }, Math.floor(Math.random() * 1000) + 2000);
    } else if (screen.classList.contains("ready")) {
      clearTimeout(timeoutId);
      screen.textContent = "너무 성급합니다";
      screen.classList.replace("ready", "waiting");
    } else if (screen.classList.contains("now")) {
      // 시간측정 -> new Date() 사용
      endTime = new Date();
      responseTime = endTime - startTime; // 끝-시작 = 측정시간
      records.push(responseTime);
      let Avg =
        records.reduce((acc, cur) => {
          return acc + cur;
        }, 0) / records.length;
      result.textContent =
        "현재 : " +
        responseTime +
        " ms" +
        " " +
        "평균 속도 : " +
        Avg.toFixed(2) +
        " ms";
      screen.classList.replace("now", "waiting");
      screen.textContent = "클릭해서 시작하세요";
    }
    /*  ready일때 setTimeout과 claerTimeout을 동시에 해서 
    시간이 계속 측정되지 않도록 함*/
  });
});
