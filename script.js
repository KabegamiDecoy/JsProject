//1 урок
let title = 'project1';
let screens = "Порстые, Сложные, Интерактивные";
let screenPrice = 135;
let rollback = 13;
let fullPrice = 135345;
let adaptive = true;
//2 урок
console.log(title, fullPrice, adaptive);
console.log(screens.length);
console.log("Стоимость верстки экранов: "+ screenPrice  + "Стоимость разработки сайта: "+ fullPrice);
console.log(screens.toLocaleLowerCase().split());
console.log(Math.trunc(fullPrice * (rollback/100)));
//3 урок
title = prompt('Как называется ваш проект?');
//    console.log(title);

screens = prompt('Какие типы экранов нужно разработать ("Простые, Сложные, Интерактивные")?');
switch (screens) {
    case 'Простые':
        screens = 'Простые';
//        console.log(screens);
        break;
    case 'Сложные':
        screens = 'Сложные';
//        console.log(screens);
        break;
    case 'Интерактивные':
        screens = 'Интерактивные';
//        console.log(screens);
        break;
    default:
        console.log('Вы ввели не верные данные');
}
//    console.log(screens);

screenPrice = prompt('Сколько будет стоить данная работа?');
//    console.log(screenPrice);

adaptive = confirm("Нужен ли адаптив на сайте?");
//    console.log(adaptive);
    
/*
 adaptive = prompt('Нужен ли адаптив на сайте (Да/Нет)?');
switch (adaptive) {
    case 'Да':
        adaptive = true;
        console.log(adaptive);
        break;
    case 'Нет':
        adaptive = false;
        console.log(adaptive);
        break;
    default:
        console.log('Вы ввели не верные данные');
}
*/
service1 = prompt('Какой дополнительный тип услуги нужен?');
servicePrice1 = prompt('Сколько это будет стоить?');
//    console.log(service1+': '+ servicePrice1);

service2 = prompt('Какой дополнительный тип услуги нужен?');
servicePrice2 = prompt('Сколько это будет стоить?');
//    console.log(service2+': '+ servicePrice2);

fullPrice = Number(screenPrice) + Number(servicePrice1) + Number(servicePrice2);
//    console.log('Итоговая стоимость работы: ' + fullPrice);

var goBack = Math.trunc(fullPrice * (rollback/100));
servicePercentPrice = fullPrice - goBack;
    console.log('Итоговая стоимость работы: ' + servicePercentPrice);

if (0 < fullPrice && fullPrice < 15000) {
    console.log("Скидка не предусмотрена");
} else if (15000 < fullPrice && fullPrice < 30000) {
    console.log("Даем скидку в 5%");
} else if (30000 < fullPrice) {
    console.log("Даем скидку в 10%");
} else {
    console.log("Что то пошло не так");
}