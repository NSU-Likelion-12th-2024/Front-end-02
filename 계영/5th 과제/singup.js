const inputId = document.querySelector("#id_input");
const idIcon = document.querySelector(".fa-user");
const idBorder = document.querySelector(".form_item.user");

const inputPass = document.querySelector("#password_input");
const passIcon = document.querySelector(".fa-lock");
const eyeIcon = document.querySelector(".eyeIcon");
const passBorder = document.querySelector(".form_item.password");

const emailInput = document.querySelector("#email_input");
const emailIcon = document.querySelector(".fa-envelope");
const emailBorder = document.querySelector(".form_item.email");

// 입력 안 하고 클릭했을 때 밑에 뜨는 ul 메시지
const formUl = document.querySelector("#form_ul");
const alertId = document.createElement("li");
const alertPass = document.createElement("li");
const alertEmail = document.createElement("li");

// event = 정해진 값을 불러온다.
// 아이디 검사 함수
function ID_check(event) {
  const regId = /^[a-z0-9_-]{5,20}$/;

  if (event.target.value == "") {
    alertId.textContent = "아이디: 필수 정보입니다.";
    alertId.style.color = "red";
    idIcon.style.color = "red";

    formUl.appendChild(alertId);
    idBorder.classList.add("form_alert");
  } else if (regId.test(event.target.value) === false) {
    alertId.textContent =
      "아이디: 5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.";
    alertId.style.color = "red";
    idIcon.style.color = "red";

    formUl.appendChild(alertId);
    idBorder.classList.add("form_alert");
  } else {
    alertId.remove();
    idIcon.style.color = "black";
    idBorder.classList.remove("form_alert");
  }
}

// 비밀번호 검사 함수
function PASSWORD_CHECK(event) {
  const regPass = /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\?`~]{8,16}$/;

  if (event.target.value == "") {
    alertPass.textContent = "비밀번호: 필수 정보입니다.";
    alertPass.style.color = "red";
    passIcon.style.color = "red";

    formUl.appendChild(alertPass);
    passBorder.classList.add("form_alert");
  } else if (regPass.test(event.target.value) === false) {
    alertPass.textContent =
      "비밀번호: 8~16자의 영문 대/소문자, 숫자, 특수문자를 사용해 주세요.";
    alertPass.style.color = "red";
    passIcon.style.color = "red";

    formUl.appendChild(alertPass);
    passBorder.classList.add("form_alert");
  } else {
    alertPass.remove();
    passIcon.style.color = "black";
    passBorder.classList.remove("form_alert");
  }
}

eyeIcon.addEventListener("click", function () {
  if (inputPass.type === "password") {
    inputPass.type = "text";
    eyeIcon.classList.remove("fa-eye-slash");
    eyeIcon.classList.add("fa-eye");
  } else {
    inputPass.type = "password";
    eyeIcon.classList.add("fa-eye-slash");
    eyeIcon.classList.remove("fa-eye");
  }
});

// 이메일 검사 함수
function EMAIL_CHECK(event) {
  const regEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (regEmail.test(event.target.value) === false) {
    alertEmail.textContent = "이메일: 이메일 주소가 정확한지 확인해 주세요.";
    alertEmail.style.color = "red";
    emailIcon.style.color = "red";

    formUl.appendChild(alertEmail);
    emailBorder.classList.add("form_alert");
  } else {
    alertEmail.remove();
    emailIcon.style.color = "black";
    emailBorder.classList.remove("form_alert");
  }
}

// 이벤트리스너
inputId.addEventListener("blur", ID_check);
inputPass.addEventListener("blur", PASSWORD_CHECK);
emailInput.addEventListener("blur", EMAIL_CHECK);
