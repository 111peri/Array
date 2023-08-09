//1) Создайте объект с ключами a, b и c значениями 5 , 6 и 10. 
//Найдите сумму его элементов.

// const a = 5
// const b = 6
// const c = 10

// const sum = a + b + c
// alert(sum)

// console.log(sum);


// 2) let number;
//   if(data === true){
//      number = 3;
//   } else{
//      number = 5;
//   }

//   Сделайте рефакторинг кода, с помощью тернарного оператора.


// let number;
// let data = 7

// if (data === true) {
//     number = 3;
// } else {
//     number = 5;
// }

// let data = true
// let number = data ? 3 : 5;


// console.log(number);

// 3) Создайте массив с элементами 10, 15, 9, 10.
//    - Умножьте первый элемент массива на второй,
//    - а третий элемент на четвертый.
//    - Результаты сложите, присвойте переменной result. 
//      Выведите на экран значение этой переменной.


// let arr = [10, 12, 9, 10]

// const array1 = arr[0] * arr[1]

// const array2 = arr[2] * arr[3]

// const result = arr[0] * arr[1]  +  arr[2] * arr[3]

// alert(result)

// 4) Создайте массив arr = ['a', 'b', 'c', 'd'] и с его помощью выведите
// на экран строку 'a+b, c+d'.

let arr = ['a', 'b', 'c', 'd']

const sum = arr[0] + "+" + arr[1]
const sum1 = arr[2] + "+" + arr[3]
console.log(sum, sum1);


// console.log(sum1, sum2);

//5) Если переменная test не равна true, то выведите 'Верно', 
//  иначе выведите 'Неверно'. Проверьте работу скрипта при test, равном true, 
// false. Напишите два варианта скрипта - с короткой записью и с длинной.





let test = false;
// console.log(test !== true ? 'Верно' : 'Неверно');


// let test = true

// if (test !== true) {
//     console.log('Неверно');
// } else {
//     console.log('Верно');
// }