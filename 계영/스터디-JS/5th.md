# p.287

1.  const num = 52000
    Number.prototype.원 =function (){
    return this.valueOf() + '원' }
    console.log(num.원())
    으로 써야 52000원으로 나온다
2.  printLang("ko"): 한국어
    printLang("en"): 영어
3.  <srcipt>
    const degrees = 90
    //90도를 라디안으로 변환 라디안= 도*(pi/180)
    const radians = degrees * (Math.PI / 180)
    const sinValue = Math.sin(radians)
    console.log(sinValue)
    </srcipt>
4.  2번

5.  <script src="https://cdn.jsdelivr.net/npm/lodash@4.17.15/lodash.min.js">
        </script>
    <script>  
    const books = [{
        name: '혼자 공부하는 파이썬',
        price: 18000,
        publisher: '한빛미디어'
        }, {
        name: 'HTML5 웹 프로그래밍 입문',
        price: 26000,
        publisher: '한밫아카데미'},
        {
        name: '머신러닝 딥러닝 실전 개발 입문',
        price: 30000,
        publisher: '위키북스'},{
        name: '딥러닝을 위한 수학',
        price: 250000,
        publisher: '위키북스' }]
        const output1 = _.sortBy(books,'name')
        console.log(output1)
        const output2 = _.orderBy(books,['name'],['asc'])
        console.log(output2)
        </script>

# p.303

1. 2번
2. Angular.js / React.js / Vue.js / Node.js / Express.js / Redux / Graph QL
