// 17. Пользователь задумал число от 1 до 100. Компьютер пытается его угадать(генерирует случайное число).После того, как компьютер называет число, пользователь говорит меьнше, больше или равно загадонному.Комьютер соотвественно генерирует заного число, но с учетом того, что сказал пользователь.Вывести все числа, которые сгенерировал компьютер перед тем как угадать число пользваотеля(Игра Угадай).
// Пример генерации случайного числа:
// let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; // случаное число от min до max


// let randomNumber1 = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
// var userNumber = 67;
// if (userNumber > randomNumber1){
// var randomNumber2 = (Math.floor(Math.random() * (100 - randomNumber1 + 1)) + 1) * 2;
// if(userNumber > randomNumber2)   
// }


// Task 1 
console.log('Task1');
var squareArea = 14;
var squarePerimetr = (squareArea / 2) * 4;
console.log(squarePerimetr);


// Task2 
console.log('TASK2');
var sideTriangleA = 4;
var sideTriangleB = 3;
var sideTriangleC = 4;
if(sideTriangleA == sideTriangleB == sideTriangleC){
    console.log('Triangle is equilateral');
} else if (sideTriangleA == sideTriangleB || sideTriangleB == sideTriangleC || sideTriangleC == sideTriangleA){
    console.log('Triangle is isosceles');
}else{
    console.log('Triangle is versatile');
}