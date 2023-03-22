/*Задание 2
Задать массив имен. Задать функцию, которая принимает 3 параметра и выводит их в консоль. Передать массив в функцию. Внутри функции каждый параметр должен быть равен одному из элементов массива.*/
const arr = ["Danik","Alex","Jhon","Tom","Jaden","Luke"];
const [first, second, third] = arr;
const names = (one,two,three) => {
    console.log(one);
    console.log(two);
    console.log(three);
}
names(first,second,third);
const names1 = (newArr) => {
    let [first, second, third] = newArr;
    console.log("first: ", first);
    console.log("second: ", second);
    console.log("third: ", third);
}
names1(arr);