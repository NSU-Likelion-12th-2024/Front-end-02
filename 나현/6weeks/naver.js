const inputPass = document.querySelector("#form_pass_input");
const passIcon = document.querySelector(".fa-lock");
const eyeIcon = document.querySelector(".eyeIcon");
const passBorder = document.querySelector("#form_pass");
const formUl = document.querySelector("#form_ul");
const alertPass = document.createElement("li");

function PWD_CHECK(event) {
  const regPass =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
  if (event.target.value === "") {
    alertPass.textContent = "비밀번호는 필수 정보입니다.";
    alertPass.style.color = "red";
    passIcon.style.color = "red";
    formUl.appendChild(alertPass);
    passBorder.classList.add("form_alert");
  } else if (regPass.test(event.target.value) === false) {
    alertPass.textContent = "비밀번호 양식에 맞춰주세요.";
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
    eyeIcon.classList.remove("fa-eye");
    eyeIcon.classList.add("fa-eye-slash");
  }
});
inputPass.addEventListener("blur", PWD_CHECK);
