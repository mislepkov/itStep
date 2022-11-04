//1
console.log('Task 1')
let arr = [1,2,3,4];
console.log(arr);
for(let i = 0; i <= arr.length-1;i++){
    console.log(arr[i]);
}

//2
console.log('Task 2 ');
arr = ['a','b','c','d'];
console.log(arr);
i = 0;
while(i <= arr.length- 1){
    console.log(arr[i]);
    i++;
}

//3
console.log('TASK 3');
 arr = [1,2,3];
console.log(arr[0], arr[1], arr[2]);

//4
console.log('TASK 4');
arr = [4,5,6,7];
let sumArr = arr[0] + arr[1] + arr[2] + arr[3];
console.log(sumArr);
arr = [1,2,3,4,5]
sumArr = 0;
for(i = 0; i <= arr.length - 1;i++){
    sumArr +=arr[i];
}
console.log(sumArr);

//5
console.log('TASK 5');
arr = ['a', 'b', 'c', 'd'];
console.log(`${arr[0]} + ${arr[1]} + ${arr[2]} + ${arr[3]} `);
let str = '';
for(i = 0; i < arr.length - 1;i++){
   str = str + arr[i] + '+';
}
str = str + arr[arr.length-1];
console.log(str);

//6
console.log('TASK 6');
arr = [1,2,3,4,5,6];
i = arr.length - 1;
let  i2 =  arr.length - 2;
 console.log(arr[i], arr[i2]);

 //7
 console.log('TASK 7');
    arr = ['a','b','c'];
    console.log(arr);
    arr[0] = 1;
    arr[1] = 2;
    arr[2] = 3;
    console.log(arr);  

//8
console.log('TASK 8');
    arr = [1,2,3,4];
   arr[0] += 3;
    arr[1] += 3; 
    arr[2] += 3;
    arr[3] += 3;
    console.log(arr);

//9
console.log('TASK 9');
arr = [9,10,11,12,13];
for(i = 0; i <= arr.length -1; i++){
    arr[i]++;
    
} 
console.log(arr);

//10
console.log('TASK10');
arr = [1,2,3];
arr[3] = 4;
arr[4] = 5;
console.log(arr);
