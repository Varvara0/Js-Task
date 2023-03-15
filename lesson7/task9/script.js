let menuElem = document.getElementById('candy');
let titleElem = menuElem.querySelector('.title');

titleElem.onclick = function() {
  menuElem.classList.toggle('open');
}; 