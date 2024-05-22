p.240 1번

<script>
      let numbers = [273, 25, 75, 52, 103, 32, 57, 24, 76];

      numbers = numbers.filter((value) => {
        return value % 2 === 1 && value <= 100 && value % 5 === 0;
      });

      console.log(numbers);
</script>

p.241 2번

<script>
      const array = ["사과", "배", "귤", "바나나"];

      console.log("# for in 반복문");
      array.forEach((value) => {
        console.log(value);
      });

      console.log("# for of 반복문");
      array.forEach((value) => {
        console.log(value);
      });
</script>

p.254 1번

<script>
      const book = {
        name: "혼자 공부하는 파이썬",
        price: "18000",
        publisher: "한빛미디어",
      };
</script>

2번
2 → 3

p.255 3번
1

4번

<script>
    print: function (lang) {
          console.log(this.ko + "는" + lang[lang] + "로" + [lang]);}
</script>
