# p.240.

1.  (1)번:
    let numbers = [273, 25, 75 ,52 ,103, 32 ,57 ,24, 76]
    numbers = numbers.filter((value) => value % 2 === 1)
    numbers = numbers.filter((value) => value <= 100)
    numbers = numbers.filter((value) => value % 5 === 0)

    console.log(numbers)

    결과:[25, 75]

2.  (2)번:
    const array = ['사과', '배', '귤', '바나나']

    console.log('# for in 반복문')

    array.forEach(function (value, index, array){
    console.log(`${index}`)
    })

    console.log('# for of 반복문')
    array.forEach(function (value){
    console.log(`${value}`)
    })

# p.254

    1.  const book ={
        name: "혼자 공부하는 파이썬"
        price: 18000
        publisher: "한빛미디어"
        }

    2.  1번
    3.  1번
    4. const object = {
        ko: "빵",
        en: "bread",
        es: "pan",
        lang: {
        ko: '한국어',
        en: '영어',
        es: '스페인어'
        },
        print: function(lang){
        console.log(`${this.ko}는 ${this.lang[lang]}로 ${this[lang]}입니다.`)
        }
        }

        object.print('es')

    출력: 빵는 스페인어로 pan입니다.
