document.onclick = function(e){
    mydiv.style.left = (e.pageX - 100 / 2 )+ "px";
    mydiv.style.top = (e.pageY - 100 / 2 ) + "px";
}