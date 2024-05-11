192.p 2번
[3, 6, 9]
const → let

192.p 3번

<script>
    let output = 1;
    for (let i = 1; i <= 100; i++) {
        output \*= i;
    }
console.log("1~100의 숫자를 모두 곱하면, " + output + "입니다");
</script>

답 : 9.33262154439441e+157

193.p

<script>
      let output = "";

      for (let i = 1; i < 6; i++) {
        for (let j = 5; j > i; j--) {
          output += " ";
        }
        for (let k = 0; k < i * 2 - 1; k++) {
          output += "*";
        }
        output += "\n";
      }
      for (let a = 5; a > 1; a--) {
        for (let b = 6; b > a; b--) {
          output += " ";
        }
        for (let c = 1; c < a * 2 - 2; c++) {
          output += "*";
        }
        output += "\n";
      }
      console.log(output);
</script>

const size=5 뺴고 풀이...

281.p 1번

<script>
      function multiplyAll(a, b) {
        let output = 1;
        for (let i = a; i <= b; i++) {
          output *= i;
        }
        return output;
      }
      console.log(multiplyAll(1, 6));
      console.log(multiplyAll(1, 3));
</script>

281.p 2번...도와주세요...ㅠ
