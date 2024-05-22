const inputId = document.querySelector("#form_id_input");
const passUser = document.querySelector(".fa-user");
const passBorderId = document.querySelector("#form_id");
const formUl1 = document.querySelector("#form_ul1");
const alertPass1 = document.createElement("li");

function ID_CHECK(event) {
  const regId = /^(?=.*[a-z])[a-z\d_-]{5,20}$/;
  if (event.target.value === "") {
    alertPass1.textContent = "아이디는 필수 정보입니다.";
    alertPass1.style.color = "red";
    passUser.style.color = "red";
    formUl1.appendChild(alertPass1);
    passBorderId.classList.add("form_alert1");
  } else if (regId.test(event.target.value) === false) {
    alertPass1.textContent =
      "아이디: 5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.";
    alertPass1.style.color = "red";
    inputId.style.color = "red";
    passUser.style.color = "red";
    formUl1.appendChild(alertPass1);
    passBorderId.classList.add("form_alert1");
  } else {
    alertPass1.remove();
    passUser.style.color = "black";
    passBorderId.classList.add("form_alert5");
  }
}
inputId.addEventListener("blur", ID_CHECK);

const inputPass = document.querySelector("#form_pass_input");
const passIcon = document.querySelector(".fa-lock");
const eyeIcon = document.querySelector(".eyeIcon");
const passBorder = document.querySelector("#form_pass");
const formUl2 = document.querySelector("#form_ul2");
const alertPass2 = document.createElement("li");
function PWD_CHECK(event) {
  const regPass =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
  if (event.target.value === "") {
    alertPass2.textContent = "비밀번호는 필수 정보입니다.";
    alertPass2.style.color = "red";
    passIcon.style.color = "red";
    formUl2.appendChild(alertPass2);
    passBorder.classList.add("form_alert");
  } else if (regPass.test(event.target.value) === false) {
    alertPass2.textContent =
      "비밀번호: 8~16자의 영문 대/소문자, 숫자, 특수문자를 사용해 주세요.";
    inputPass.style.color = "red";
    alertPass2.style.color = "red";
    passIcon.style.color = "red";
    formUl2.appendChild(alertPass2);
    passBorder.classList.add("form_alert");
  } else {
    alertPass2.remove();
    passIcon.style.color = "black";
    passBorder.classList.add("form_alert6");
  }
}
eyeIcon.addEventListener("click", function () {
  if (inputPass.type === "password") {
    inputPass.type = "text";
    eyeIcon.classList.remove("fa-eye-slash");
    eyeIcon.classList.add("fa-eye");
  } else {
    inputPass.type = "password";
    eyeIcon.classList.remove("fa-eye");
    eyeIcon.classList.add("fa-eye-slash");
  }
});
inputPass.addEventListener("blur", PWD_CHECK);

const inputEmail = document.querySelector("#form_email_input");
const passEmail = document.querySelector(".fa-envelope");
const passBorderEmail = document.querySelector("#form_email");
const formUl3 = document.querySelector("#form_ul3");
const alertPass3 = document.createElement("li");

function EML_CHECK(event) {
  const regEmail =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/;
  if (event.target.value === "") {
    alertPass3.textContent = "이메일은 필수 정보입니다.";
    alertPass3.style.color = "red";
    passEmail.style.color = "red";
    formUl3.appendChild(alertPass3);
    passBorderEmail.classList.add("form_alert3");
  } else if (regEmail.test(event.target.value) === false) {
    alertPass3.textContent = "이메일: 이메일 주소가 정확한지 확인해주세요.";
    inputEmail.style.color = "red";
    alertPass3.style.color = "red";
    passEmail.style.color = "red";
    formUl3.appendChild(alertPass3);
    passBorderEmail.classList.add("form_alert3");
  } else {
    alertPass3.remove();
    passEmail.style.color = "black";
    passBorderEmail.classList.add("form_alert7");
  }
}
inputEmail.addEventListener("blur", EML_CHECK);
