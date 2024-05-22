// input
const $inputId = document.querySelector("#form__id__input");
const $inputPass = document.querySelector("#form__pass__input");
const $inputEmail = document.querySelector("#form__email__input");

// icon
const idIcon = document.querySelector(".idIcon");
const passIcon = document.querySelector(".fa-lock");
const eyeIcon = document.querySelector(".fa-eye-slash");
const emailIcon = document.querySelector(".fa-envelope");

// border
const idBorder = document.querySelector("#form__id");
const passBorder = document.querySelector("#form__pass");
const emailBorder = document.querySelector("#form__email");

// alert
const alertId = document.createElement("li");
const alertPass = document.createElement("li");
const alertEmail = document.createElement("li");

const form1 = document.querySelector("#form__ul-1");

function ID_CHECK(event) {
  const regID = /^[a-z0-9_-]{5,20}$/;
  if (event.target.value === "") {
    alertId.textContent = "아이디: 필수 정보입니다.";
    alertId.style.color = "red";
    idIcon.style.color = "red";
    idBorder.classList.add("form__container__alert");
    form1.appendChild(alertId);
  } else if (regID.test(event.target.value) === false) {
    alertId.textContent =
      "아이디: 5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.";
    alertId.style.color = "red";
    idIcon.style.color = "red";
    idBorder.classList.add("form__container__alert");
    form1.appendChild(alertId);
  } else {
    alertId.remove();
    idBorder.classList.remove("form__container__alert");
    idIcon.style.color = "black";
  }
}
function PWD_CHECK(event) {
  const regPass =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
  if (event.target.value === "") {
    alertPass.textContent = "비밀번호: 필수 정보입니다.";
    alertPass.style.color = "red";
    passIcon.style.color = "red";
    passBorder.classList.add("form__container__alert");
    form1.appendChild(alertPass);
  } else if (regPass.test(event.target.value) === false) {
    //test:정규표현식에서 비교할때 씀
    alertPass.textContent =
      "비밀번호: 8~16자의 영문 대/소문자, 숫자, 특수문자를 사용해 주세요.";
    alertPass.style.color = "red";
    passIcon.style.color = "red";
    passBorder.classList.add("form__container__alert");
    form1.appendChild(alertPass);
  } else {
    alertPass.remove();
    passIcon.style.color = "black";
    passBorder.classList.remove("form__container__alert");
  }
}
eyeIcon.addEventListener("click", function () {
  if ($inputPass.type === "password") {
    $inputPass.type = "text";
    eyeIcon.classList.remove("fa-eye-slash");
    eyeIcon.classList.add("fa-eye");
  } else {
    $inputPass.type = "password";
    eyeIcon.classList.remove("fa-eye");
    eyeIcon.classList.add("fa-eye-slash");
  }
});

function EMAIL_CHECK(event) {
  const regEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
  if (regEmail.test(event.target.value) === false) {
    alertEmail.textContent = "이메일: 이메일 주소가 정확한지 확인해 주세요.";
    alertEmail.style.color = "red";
    emailIcon.style.color = "red";
    emailBorder.classList.add("form__container__alert");
    form1.appendChild(alertEmail);
  } else {
    alertEmail.remove();
    emailIcon.style.color = "black";
    emailBorder.classList.remove("form__container__alert");
  }
}

$inputId.addEventListener("blur", ID_CHECK);
$inputPass.addEventListener("blur", PWD_CHECK);
$inputEmail.addEventListener("change", EMAIL_CHECK);
