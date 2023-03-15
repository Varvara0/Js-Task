/*3. Написать функцию startsWith, которая принимает 2 строки и проверяет, начинается ли первая строка с символов второй строки. Функция возвращает true или false.*/
function startsWith(str1, str2){
    str1 = str1.split('');
    str2 = str2.split('');
    return(str2.includes(str1[0]));
}
console.log(startsWith('hello','world'))
console.log(startsWith('happy day','happy night'))