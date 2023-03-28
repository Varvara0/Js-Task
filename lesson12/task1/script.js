function Shop(name,adress){
    this.name = name;
    this.adress = adress;
}
let green = new Shop('Green', 'ул. Петра Мстиславца 11, Минск');
let proStore = new Shop('ProStore', 'пр-т Дзержинского, 126, Минск');

let shops = [green, proStore];
console.log(green,proStore);

let adres = shops.map(shop => shop.adress);

console.log(adres);
