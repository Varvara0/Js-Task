/*Задание 3
Задать объект с N полей. Создать 2 переменные, которые будут называться так же, как поля, и хранить 2 значения полей объекта. Если соответствующих полей в объекте нет, задать значения чисел 1 и 2. Все остальные поля объекта записать в переменную fields.*/


let price = {
    mobile: 100,
    auto: 300,
    plane: undefined,
    bus: 400
};
const {mobile,plane} = price;
if(mobile === undefined || plane === undefined){
    let {mobile = 1, plane = 2, ...fields } = price;
    console.log("plane:",plane);
    console.log("mobile:",mobile);
    console.log(fields);
}
