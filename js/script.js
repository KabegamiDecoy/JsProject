 // *************** 1 урок ************************
// let title = 'project1';
// let screens = "Порстые, Сложные, Интерактивные";
// let screenPrice = 135;
//  let rollback = 10;
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
// let title
// let screens
// let screenPrice
// let adaptive
// let rollback = 10;
// let allServicePrices
// let fullPrice
// let servicePercentPrice
// let service1
// let service2
// ************* 5 урок ****************************
// const isNumber = function(num) {
//     return !isNaN(parseFloat(num)) && isFinite(num)
// }

// const asking = function() {
//     title = prompt('Как называется ваш проект?', 'Калькулятор вёрстки');
//     screens = prompt('Какие типы экранов нужно разработать ("Простые, Сложные, Интерактивные")?', 'Простые, Сложные');
    

//     do {
//         screenPrice = prompt('Сколько будет стоить данная работа?');
//     } while (!isNumber(screenPrice))
//     adaptive = confirm("Нужен ли адаптив на сайте?");
// }

// const getAllServicePrices = function () {
//     let sum = 0
//     for ( let i = 0; i < 2; i++) {
//         let price = 0

//         if ( i === 0) {
//             service1 = prompt("Какой дополнительный тип услуги нужен?")
//         } else if (i === 1) {
//             service2 = prompt("Какой дополнительный тип услуги нужен?")
//         }

//         do {
//             price = prompt("Сколько это будет стоить?")
//         } while (!isNumber(price))
//         sum += +price
//     }

//     return sum
// }

// const getFullPrice = function () {
//    return Number(screenPrice) + allServicePrices    
// }

// const getTitle = function() {
//     return title.trim()[0].toUpperCase() + title.trim().substr(1).toLowerCase()
// }

// const getServicePercentPrice = function () {
//     return fullPrice - (fullPrice * (rollback / 100))
// }

// const getRollbackMessage = function (price) {
//     if (price >= 30000) {
//         return "Даём скидку в 10%"
//     } else if (price >= 15000 && price < 30000) {
//         return "Даём скидку в 5%"
//     } else if (price >= 0 && price < 15000) {
//         return "Скидка не предусмотрена"
//     } else {
//         return "Что-то пошло не так"
//     }
// }

// asking()
// allServicePrices = getAllServicePrices()
// fullPrice = getFullPrice()
// servicePercentPrice = getServicePercentPrice()
// title = getTitle()



// console.log(getRollbackMessage(fullPrice));
// console.log(typeof title);
// console.log(title);
// console.log(typeof screenPrice);
// console.log(typeof adaptive);

// console.log(screens.length);
// console.log(servicePercentPrice);

// console.log("Стоимость верстки экранов " + screenPrice + " Руб " + "и Стоимость разработки сайта " + fullPrice + " Руб");

// *************** 7 урок *************************

// let title
// let screens
// let screenPrice
// let adaptive
// let rollback = 10;
// let allServicePrices
// let fullPrice
// let servicePercentPrice
// let service1
// let service2

// const appData = {
//     title: '',
//     screens: [],
//     screenPrice: 0,
//     adaptive: true,
//     rollback: 10,
//     allServicePrices: 0,
//     fullPrice: 0,
//     servicePercentPrice: 0,
//     services: {},
    
//     start: function() {
//         appData.asking()
//         appData.addPrices()
//         appData.getFullPrice()
//         appData.getServicePercentPrice()
//         appData.getTitle()

//         appData.logger()
//     },
//     isNumber: function(num) {
//         return !isNaN(parseFloat(num)) && isFinite(num)
//     },
//     asking: function() {
//         appData.title = prompt('Как называется ваш проект?', 'Калькулятор вёрстки');


//         for ( let i = 0; i < 2; i++) {
//             let name = prompt('Какие типы экранов нужно разработать?')
//             let price = 0

//             do {
//                 price = prompt('Сколько будет стоить данная работа?');
//             } while (!appData.isNumber(price))

//             appData.screens.push({id: i, name: name, price: price})
//         }

        

//         for ( let i = 0; i < 2; i++) {
//             let name = prompt("Какой дополнительный тип услуги нужен?")
//             let price = 0
    
//             do {
//                 price = prompt("Сколько это будет стоить?")
//             } while (!appData.isNumber(price))
//             appData.services[name] = +price
//         }

//         appData.adaptive = confirm("Нужен ли адаптив на сайте?");
//     },
//     addPrices: function() {
//         for(let screen of appData.screens) {
//             appData.screenPrice += +screen.price
//         }
//         for(let key in appData.services) {
//             appData.allServicePrices += appData.services[key]
//         }
//     },
//     getFullPrice: function () {
//         appData.fullPrice = +appData.screenPrice + appData.allServicePrices    
//      },
//      getServicePercentPrice: function () {
//         appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100))
//     },
//     getTitle: function() {
//         appData.title = appData.title.trim()[0].toUpperCase() + appData.title.trim().substr(1).toLowerCase()
//     },
//     getRollbackMessage: function (price) {
//         if (price >= 30000) {
//             return "Даём скидку в 10%"
//         } else if (price >= 15000 && price < 30000) {
//             return "Даём скидку в 5%"
//         } else if (price >= 0 && price < 15000) {
//             return "Скидка не предусмотрена"
//         } else {
//             return "Что-то пошло не так"
//         }
//     },
//     logger: function () {
//         console.log(appData.fullPrice);
//         console.log(appData.servicePercentPrice);
//         console.log(appData.screens);
//     }
// }
// appData.start()

const mainTitle = document.getElementsByTagName('h1');
const buttons = document.getElementsByClassName('handler_btn');
const plus = document.querySelector('.screen-btn');
const otherItemsPercent = document.querySelectorAll('.percent')
const otherItemsNumber = document.querySelectorAll('.number')
const rollbackInput = document.querySelector('input[type="range"]')
const spanRange = document.querySelector('.rollback .range-value')
function searchInput() {
    const totalInput = document.getElementsByClassName('total-input');
    for(let i = 0; i < totalInput.length; i++) {
        console.log(totalInput[i]);
    }
}
const bloocks = document.querySelectorAll('.screen');
console.log(mainTitle[0]);
console.log(buttons);
console.log(plus);
console.log(otherItemsPercent);
console.log(otherItemsNumber);
console.log(rollbackInput);
console.log(spanRange);
searchInput()
console.log(bloocks);