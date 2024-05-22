// // 4월 29일 월요일 세션- 자바스크립트
// console.log("로그 메시지");
// alert("경고창으로 출력");

// let age = 25;
// let pi = 3.14;

// let name = "Alice";
// let message = "Hello, world!";

// let isTrue = true;
// let isFalse = false;

// // 배열
// let numbers = [1, 2, 3, 4, 5];
// let fruits = ["apple", "banana", "orange"];

// // 객체-Key와 Value의 쌍으로 이루어짐, {}을 사용, key는 :으로 구분한다
// let person = {
//   name: "Duk",
//   age: 23,
//   city: "korea",
// };

// console.log(person.name); //duk
// console.log(person["age"]); //23

// // 함수-코드 블록을 나타내는 데이터 타입, 재사용 가능, 매개변수..
// function greet(name) {
//   return "Hello, " + name + "!";
// }

// //기본문법: 반복문 for
// for (let i = 0; i < 5; i++) {
//   console.log("반복 횟수:", i);
// }

// 1~10까지 홀수의 합 구하기
let sum = 0;
for (let i = 0; i < 11 && i % 2 == 1; i++) {
  console.log("홀수의 합은", (sum += i));
}

//if문으로 학점구하기
let score = 86;
if (score >= 90) {
  console.log("A학점입니다.");
} else if (score >= 80) {
  console.log("B학점입니다.");
} else if (score >= 70) {
  console.log("C학점입니다.");
}
