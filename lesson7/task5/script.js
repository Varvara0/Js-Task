let input = document.querySelector('input');

let p = document.querySelector('p');

let text = 'Нажатая клавиша: ';

input.onkeydown = (event) => p.innerText = text + event.key;