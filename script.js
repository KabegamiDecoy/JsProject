let title = 'project1';
let screens = "Порстые, Сложные, Интерактивные";
let screenPrice = 135;
let rollback = 13;
let fullPrice = 135345;
let adaptive = true;

console.log(title, fullPrice, adaptive);
console.log(screens.length);
console.log("Стоимость верстки экранов: "+ screenPrice  + "Стоимость разработки сайта: "+ fullPrice);
console.log(screens.toLocaleLowerCase().split());
console.log(Math.trunc(fullPrice * (rollback/100)));