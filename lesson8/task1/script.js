function makeCalc(){
    let x =2 ;
    const result = function(){
        console.log(x*2);
    }
    return result;
}
let calc = makeCalc();
console.log(calc())