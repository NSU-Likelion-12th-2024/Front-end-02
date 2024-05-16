# p191.

    1.  #for in 반복문
        0
        1
        2
        3

        #for of 반복문
        사과
        배
        귤
        바나나

    2.  for문 초기식 const -> let 으로 수정

    3.  let output = 1

    for(let i =1; i <=100; i++){
    output \*= i
    }

    console.log(`1~100의 숫자를 모두 곱하면 ${output}입니다.`)

    결과-1~100의 숫자를 모두 곱하면 9.33262154439441e+157입니다.

    4.  (1) let output = ''

    for (let i = 1; i <6; i++){
    for(let j = 6; j>i; j--){
    output += ' '
    }
    for(let k =0 ; k< 2*i -1; k++){
    output += '*'
    }
    output += '\n'
    }
    console.log(output)

# p218.

    1.
    //A부터 B까지 숫자를 모두 곱하는 함수
    function multiply (a,b) {
    let output = 1
    for ( let i = a; i <=b; i++){
    output \*= i
    }
    return output
    }

    console.log(multiply(1,2))
    console.log(multiply(1,3))

    2. //최대값 찾는 max()함수
    <첫 번째>
    const max = function (array){
    let output = array[0]
    for(const item of array){
    if(output <item){
    output = item
    }
    }
    return output
    }
    console.log(max([1,2,3,4]))

    <두 번째>
    const max = function (...c){
    let output = c[0]
    for(const item of c){
    if(output < item){
    output = item
    }
    }
    return output
    }
    console.log(max(1,2,3,4))

    <세 번째>
    const max = function {
    let output
    let items

    return output
    }

    console.log(`max(배열): ${max([1,2,3,4])}`)
    console.log(`max(숫자, ...): ${max(1,2,3,4)}`)
