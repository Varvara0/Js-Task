function myFunction(e){
    x = e.clientX;
    y = e.clientY;
    coor = "X:" + x + " " + "Y:"+ y;
    document.getElementById("coordiv").innerHTML = coor
}
function clearCoor(){
    document.getElementById("coordiv").innerHTML = "";
}