// //1
// var first = 1; //first number
// var last = 10; //last number 
// var currently ;
// do {
//     currently = first;
//     first++;
//     console.log(currently)
// }while (first <=last);


// // 2
// var f = 20, l = 11;
// var c;
// while(l<=f){
//     c = f;
//     f--;
// }
// console.log(c);

// //3


// i = 1;
// var k;
// for (i=1;i <= 10;i++){
//     k = i * 4;
//     console.log(k)
// }

// //4 
// var N = 10;
// var sum;
// while (N >= sum){
//     N % 2 == 0;

// }
// var s = 0, j = 2; // чётные, цикл начинаем с двойки
// while (j <= 5) {
//     s += j, 
//     j = j + 2
// }

// 12 Task
console.log('Task12');
var $s, sum = 0;
for( let i = 100; i <= 999; i++ ){
    $s = i
   if(i%10==0 && i%13 == 0){
       sum += $s;
   }
}
console.log(sum);


// TASK13
console.log('TASK13');

var N = 12;
var counter = 0;
var counter2 = 0;
for( let i = 1; i <= N;i++){
    if(N % i == 0 ){
        counter++;
    }
   }
for (let i = 1; i <= N; i++) {
    if (N % N == 0 && N % 1 == 0) {
        counter2++;
    }
}
console.log(counter,counter2);