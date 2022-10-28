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
// console.log('Task12');
// var $s, sum = 0;
// for( let i = 100; i <= 999; i++ ){
//     $s = i
//    if(i%10==0 && i%13 == 0){
//        sum += $s;
//    }
// }
// console.log(sum);


// // TASK13
// console.log('TASK13');

// var N = 12;
// var counter = 0;
// var counter2 = 0;
// for( let i = 1; i <= N;i++){
//     if(N % i == 0 ){
//         counter++;
//     }
//    }
// for (let i = 1; i <= N; i++) {
//     if (N % N == 0 && N % 1 == 0) {
//         counter2++;
//     }
// }
// console.log(counter,counter2);



var dayOrder = 6;
var timeOrder = 20.00;

if (timeOrder >= 8.00 && timeOrder <= 16.00 && dayOrder <= 6){
    console.log('your order will delivered after 16 o\'clock today');
}else if (timeOrder > 16.00 && timeOrder <= 24.00 && dayOrder <=5){
    console.log('youre order will be delivery om the next day in 8 oclock by 16 o clock');
}else if (timeOrder >= 0 && timeOrder<= 8.00 && dayOrder <= 6){
    console.log('youre order will be delivery today in 8 by 16.00');
}else{
    console.log('youre order will be delivery on monday in 8 by 16 oclock');
}




// if (timeOrder >= 8.00 && timeOrder <= 16.00){
//     while (dayOrder = 'Monday' || dayOrder = 'Tuesday' || dayOrder = 'Wednesday' || dayOrder = 'Thursday' || dayOrder = 'Friday' || dayOrder = 'Saturday' && dayOrder != 'Sunday') {
//         console.log('youre order will be deliveri after 16 oclock');
//     } else if (timeOrder > 16.00 && timeOrder <= 24.00){
//         while (dayOrder = 'Monday' || dayOrder = 'Tuesday' || dayOrder = 'Wednesday' || dayOrder = 'Thursday' || dayOrder = 'Friday' || dayOrder = 'Saturday' && dayOrder != 'Sunday') {
//             console.log('youre order will be deliveri on the next day start 8.00 by 16.00 o clock');
//     } else if (timeOrder >= 00 && timeOrder < 8.00 ){
//         while (dayOrder = 'Monday' || dayOrder = 'Tuesday' || dayOrder = 'Wednesday' || dayOrder = 'Thursday' || dayOrder = 'Friday' || dayOrder = 'Saturday' && dayOrder != 'Sunday') {
//             console.log('youre order will be deliveri on the next day start 8.00 by 16.00 o clock');
//     }else if (dayOrder = 'Sunday'){
//         console.log('youre order will be delivery on Monday 8.00 by 16.00');
//     }
// }