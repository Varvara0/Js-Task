/*Задание1
1)
Задать объект с полем name.
Задать переменную, которая будет хранить JSON упомянутого объекта.
Задать переменную, которая будет хранить результат парсинга предыдущей переменной.

let obj = {};
obj.name = 'alina';
let jsonObject = JSON.stringify(obj.name);
let initialObject = JSON.parse(jsonObject);
console.log(initialObject);*/

/*2)
Создать переменную user, в которой хранится объект.
Записать переменную в localStorage.
Создать переменную newUser, в которой будет храниться JS объект из localStorage.*/
let user = {};
localStorage.name = 'ANTON';
let newUser = localStorage.name;
console.log(newUser);
