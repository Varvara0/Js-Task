
let input = document.querySelector('input');

let p = document.querySelector('p');

let text = 'Код нажатой клавиши:' 
input.onkeydown = (event) => p.innerText = `${text}${event.keyCode}`;