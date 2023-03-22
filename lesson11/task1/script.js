let arr = ["Katya","Alina","Angelina","roman","pavel"];
const [firstName, secondName, ...rest] = arr;
console.log(firstName);
console.log(secondName);
console.log(rest[0]);
console.log(rest[1]);
console.log(rest[2]);
console.log(rest.length);
if(rest.length < 2){
    rest[1] === 'alex';
}


