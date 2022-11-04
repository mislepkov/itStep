//1 
console.log('TASK1');
let a = [];
const min = 1;
const max = 100;
n = 10;
for(i = 0; i < n; i++){
    a[i] = Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(a);
 let k = 4;
 for(i = a.length - k; i < a.length;i++){
     console.log(a[i]);
 }

 //2
 console.log('Task 2 ');
 k = 6;
 for(i =0; i < a.length; i++){
     if(a[i] % k == 0){
         console.log(a[i]);
     }
 }
 

 //3
 console.log('TASK 3');

let maxElement = a[0];
for(i = 1; i < a.length;i++){
    if(a[i] > maxElement){
        maxElement = a[i]
    }
}
console.log('Max Elements equals ' + maxElement);

let minElement = a[0];
for(i = 1; i < a.length;i++){
    if(a[i] < minElement){
        minElement = a[i];
    }
}
console.log('Min Elements equals ' + minElement);


//4
console.log('Task4');





















