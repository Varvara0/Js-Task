/*Задание 1
Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.
Вам понадобятся методы строк.*/
let str = 'hello, world';
function ucFirst(str){
    return str[0].toUpperCase() + str.slice(1);
}
console.log(ucFirst('hello, world'));
/*Задание 2
Напишите функцию checkSpam(str), возвращающую true, если str содержит 'badWord' или 'XXX', а иначе false.
Функция должна быть нечувствительна к регистру.*/
function checkSpam(str){
    let lowerStr = str.toLowerCase();
    return lowerStr.includes('spam') || lowerStr.includes('xxx');

}
console.log(checkSpam('check SpAm'));
console.log(checkSpam('check XXX'));
console.log(checkSpam('hello, world'));

/*Задание 3
Написать функцию, которой на вход подается строка, на выход она дает символы наоборот (разворачивает строку). Пример: «привет Женя» -> «янеЖ тевирп»
Обратите внимание: метод reverse существует только у массивов.*/

function reverseRow(str){
    return str.split('').reverse().join('');
}
console.log(reverseRow('привет, Женя'));
/*Задание 4

Массив содержит строки с информацией о железнодорожных станциях на севере Англии. Строки представляют собой трёхбуквенный код станции, затем некоторые машиночитаемые данные, за которыми следует точка с запятой, а затем название станции, пригодное для чтения человеком. 

let stations = [
'MAN675847583748sjt567654;Manchester Piccadilly',
'GNF576746573fhdg4737dh4;Greenfield',
'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
'SYB4f65hf75f736463;Stalybridge',
'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'
];

Необходимо извлечь код станции и имя и поместить их в строку со следующей структурой:
MAN: Manchester Piccadilly
Вывести эти строки в консоль
ПОДСКАЗКА:
1. Извлеките трёхбуквенный код станции и сохраните его в новой переменной.
2. Найдите номер символьного номера точки с запятой.
3. Извлеките название для чтения человеком, используя номер индекса точки с запятой в качестве контрольной точки и сохраните его в новой переменной.
4. Объедините две новые переменные и строк*/
let stations = [
    'MAN675847583748sjt567654;Manchester Piccadilly',
    'GNF576746573fhdg4737dh4;Greenfield',
    'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
    'SYB4f65hf75f736463;Stalybridge',
    'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'
    ];
for(let i = 0; i <= stations.length; i++){
    let array = stations[i];
    let firstCode = array.slice(0,3);
    let semicolon = array.indexOf(';');
    let name = array.slice(semicolon + 1);
    let newRow = firstCode + ':' + name;
    console.log(newRow);
}

/*Задание 5
Напишите функцию unique(arr), которая принимает массив, а возвращает новый массив, содержащий только уникальные элементы arr.
Пример:
let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];
console.log(unique(strings) ); должен вывести "кришна, харе, :-O"

ПОДСКАЗКА
- создать новый массив
- обойти исходный массив, если элемент отсутствует в новом - добавлять его в новый. Таким образом в новый добавятся только уникальные.*/
let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];
function unique(arr){
    let newArr = [];
    for(let str of arr){
        if(!newArr.includes(str)){
            newArr.push(str);
        }
    }
    return newArr;
}
console.log(unique(strings) );

