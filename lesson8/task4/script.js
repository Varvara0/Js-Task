let popup = document.getElementById('popup');
let popupBtn = document.getElementById('call-btn');
let btnClose = document.querySelector('.popup_close');
let popupContent = document.querySelector('.popup_content');
popupBtn.addEventListener('click',() =>{
    popup.classList.add('open');
});
btnClose.addEventListener('click',() => {
popup.classList.remove('open');
});
window.addEventListener('click', event => {
    if(event.target.classList.contains('open')){
        popup.classList.remove('open');
    }
})