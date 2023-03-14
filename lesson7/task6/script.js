
 
let elem = document.querySelector('#btn');
 
elem.addEventListener('click', function (event) {
if(event.ctrlKey) {
    elem.style.backgroundColor = 'red';
}
});