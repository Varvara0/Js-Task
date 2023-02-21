/*Задание 1

Написать функцию, которая принимает два параметра и складывает их.
Предусмотреть проверку на тип данных. Если хоть один из параметров не является числом, должно выводиться ообщение об ошибке. Также обраьботайте случай, если не было введено два параметра.*/
function sum(a,b){
    console.log(typeof(a,b));
    if( typeof a === "number" && typeof b === "number"){
        console.log(a + b);
    }else if(typeof a === "undefined" || typeof b === "undefined"){
        console.log('Введите два параметра');
    }else{
        console.log('Введенные данные не являются числами');
    }
}
sum(1);

/*Задание 2
Измените функцию "square" так, чтобы в случае ее вызова без аргумента генерировалась консольная ошибка
"Функция "square" не может быть вызвана без аргумента"

function square(a) {
  console.log(a * a)
}
square(10) // 100
square()
// ДО: NaN
// ПОСЛЕ: Uncaught Error: Функция "square" не может быть вызвана без аргумента*/
function square(a) {
    if(typeof a === typeof undefined){
        console.log('Uncaught Error: Функция "square" не может быть вызвана без аргумента')
    }else{
        console.log(a * a);
    }

  }
  square(10);

  /*Задание 3

Создать функцию "угадай число". Она принимает число от 1 до 10 (обязательно проверить, что число не больше 10 и не меньше 0). Генерирует рандомное число от 1 до 10 и сравнивает с заданным числом.
Если они совпали, то возвращает “Вы выиграли”, если нет - то “Вы не угадали, ваше число -  ...,  а выпало число ...”
Функция создания случайного числа уже была ранее в материалах, в задаче по созданию случайного цвета.
Написать функцию в стрелочном синтаксисе.*/

function getRandomInteger(min, max) {
    let userNumber = +prompt('enter a number');
    let random = Math.floor(min + Math.random() * (max + 1 - min));
     if(userNumber === random){
            console.log('You win');
        }else{
            console.log(`Вы не угадали, ваше число - ${userNumber}, а выпало число ${random}`);
        }
        return Math.floor(min + Math.random() * (max + 1 - min));
    }
getRandomInteger(1, 10);

/*Задание 4
Определить массив, например let arr = [5, 4, 3, 8, 0];
Создать функцию filterFor(arr, a). Функция должна вернуть новый массив из элементов arr, но в нем должны содержаться элементы, которые больше или равны (>=) значения переменной a.
Например, запуск функции filterFor(arr, 5) дает результат [5,8]
запуск функции filterFor(arr, 10) дает результат []
запуск функции filterFor(arr, 3.11) дает результат [4,5,8]*/
let arr = [5, 4, 3, 8, 0];
function filterFor(arr, a){
 for(let key in arr){
     if(arr[key] >= a ){
         console.log(arr[key]);
     }
 }
}
filterFor(arr, 3.11);

/*Задание 5
Напишите функцию copyArr(arr), которая копирует массив, не изменяя оригинал. Используйте подходящий метод массива.*/
let arr = ['Mom', 'Dad', 'Granny', 'Sister'];
function copyArr(arr){
   return  arr.slice();
}
let arr1 = copyArr(arr);
console.log(arr1);

/*Задание 6
Создайте функцию sumObjectValues, которая будет суммировать все значения свойств, которые являются числами. Сумму чисел необходимо вернуть из функции.

Проверить работу функции можно на объекте:
const objectWithNumbers = {
  a: 10,
  b: 20,
  c: 'string',
  d: 12,
}*/
const objectWithNumbers = {
    a: 10,
    b: 20,
    c: 'string',
    d: 12,
  }
  function sumObjectValues(objectWithNumbers) {
    let sum = 0;
  for(let num of Object.values(objectWithNumbers)){
    if(typeof num === 'number'){
      sum += num
    }
  }
  return sum;
  }
  console.log(sumObjectValues(objectWithNumbers));
  