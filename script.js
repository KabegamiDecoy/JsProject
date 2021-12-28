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

let title
let screens
let screenPrice
let adaptive
let service1
let service2
// ************* 5 урок ****************************
const isNumber = function(num) {
    return !isNaN(parseFloat(num)) && isFinite(num)
}

const asking = function() {
    title = prompt('Как называется ваш проект?', 'Калькулятор вёрстки');
    screens = prompt('Какие типы экранов нужно разработать ("Простые, Сложные, Интерактивные")?', 'Простые, Сложные');
    

    do {
        screenPrice = prompt('Сколько будет стоить данная работа?');
    } while (!isNumber(screenPrice))
    adaptive = confirm("Нужен ли адаптив на сайте?");
}

const getAllServicePrices = function () {
    let sum = 0
    for ( let i = 0; i < 2; i++) {

        if ( i === 0) {
            service1 = prompt("Какой дополнительный тип услуги нужен?")
        } else if (i === 1) {
            service2 = prompt("Какой дополнительный тип услуги нужен?")
        }

        sum += +prompt("Сколько это будет стоить?")
    }

    return sum
}

const getFullPrice = function () {
   return Number(screenPrice) + allServicePrices    
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

asking()
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