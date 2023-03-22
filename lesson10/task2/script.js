
/*Задание 2
Разместить на странице несколько картинок. При клике на любую картинку она плавно становится на бэкграунд всей страницы, а тег картинки получает уникальные css-свойства (чтобы было понятно, что сейчас эта картинка является выбранным элементом). При перезагрузке страницы последнее выбранное состояние должно сохраниться, реализовать через LocalStorage.*/

const images = document.querySelectorAll('.image-wrapper img');
const container = document.querySelector('.container');

function background(image){
    let activeInd = 0 

    container.style.background = `url(${image.src})`;
    container.style.backgroundRepeat = 'no-repeat';
    container.style.backgroundSize = 'cover';

    images.forEach((img,index) =>{
        if (img === image){

            img.classList.add('ative');
            activeInd = index;

        }else{
            img.classList.remove('active');
        }
    })
    localStorage.setItem('activeInd',activeInd);
}
images.forEach((img) =>{
    img.addEventListener('click',() => background(img));
})