 // *************** 1 урок ************************
// let title = 'project1';
// let screens = "Порстые, Сложные, Интерактивные";
// let screenPrice = 135;
 let rollback = 13;
// let fullPrice = 135345;
// let adaptive = true;


// **************** 2 урок ************************
// console.log(title, fullPrice, adaptive);
// console.log(screens.length);
// console.log("Стоимость верстки экранов: "+ screenPrice  + "Стоимость разработки сайта: "+ fullPrice);
// console.log(screens.toLocaleLowerCase().split());
// console.log(Math.trunc(fullPrice * (rollback/100)));


// **************** 3 урок *************************

//fullPrice = screenPrice + servicePrice1 + servicePrice2;
//var goBack = Math.trunc(fullPrice * (rollback/100));
//servicePercentPrice = fullPrice - goBack;

// if (0 < fullPrice && fullPrice < 15000) {
//     console.log("Скидка не предусмотрена");
// } else if (15000 < fullPrice && fullPrice < 30000) {
//     console.log("Даем скидку в 5%");
// } else if (30000 < fullPrice) {
//     console.log("Даем скидку в 10%");
// } else {
//     console.log("Что то пошло не так");
// }

// ************** 4 урок **************************
let allServicePrices
let fullPrice
let servicePercentPrice

title = prompt('Как называется ваш проект?');
screens = prompt('Какие типы экранов нужно разработать ("Простые, Сложные, Интерактивные")?');
switch (screens) {
    case 'Простые':
        screens = 'Простые';
        break;
    case 'Сложные':
        screens = 'Сложные';
        break;
    case 'Интерактивные':
        screens = 'Интерактивные';
        break;
    default:
        console.log('Вы ввели не верные данные');
}
screenPrice = +prompt('Сколько будет стоить данная работа?');
adaptive = confirm("Нужен ли адаптив на сайте?");
service1 = prompt('Какой дополнительный тип услуги нужен?');
servicePrice1 = +prompt('Сколько это будет стоить?');
service2 = prompt('Какой дополнительный тип услуги нужен?');
servicePrice2 = +prompt('Сколько это будет стоить?');

const getAllServicePrices = function () {
    return servicePrice1 + servicePrice2
}

const getFullPrice = function () {
   return screenPrice + allServicePrices    
}

const getTitle = function() {
    return title.trim()[0].toUpperCase() + title.trim().substr(1).toLowerCase()
}

const getServicePercentPrice = function () {
    return fullPrice - (fullPrice * (rollback / 100))
}

const getRollbackMessage = function (price) {
    if (price >= 30000) {
        return "Даём скидку в 10%"
    } else if (price >= 15000 && price < 30000) {
        return "Даём скидку в 5%"
    } else if (price >= 0 && price < 15000) {
        return "Скидка не предусмотрена"
    } else {
        return "Что-то пошло не так"
    }
}

allServicePrices = getAllServicePrices()
fullPrice = getFullPrice()
servicePercentPrice = getServicePercentPrice()
title = getTitle()



console.log(getRollbackMessage(fullPrice));
console.log(typeof title);
console.log(title);
console.log(typeof screenPrice);
console.log(typeof adaptive);

console.log(screens.length);
console.log(servicePercentPrice);

console.log("Стоимость верстки экранов " + screenPrice + " Руб " + "и Стоимость разработки сайта " + fullPrice + " Руб");