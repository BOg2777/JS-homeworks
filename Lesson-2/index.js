//Первое задание
/*let name = prompt('Как вас зовут?'),
    age = prompt('Сколько вам лет?'),
    city = prompt('В каком городе вы проживаете?'),
    phone = prompt('Какой у вас номер телефона?'),
    email = prompt('Какой ваш адрес электронной почты?'),
    company = prompt('В какой компании вы работаете?');
console.log('Меня зовут', name, '. Мне ', age, 'лет. Я проживаю в городе', city, 'и работаю в компании', company, '. Мои контактные данные: ', phone, email);
//Второе задание
let annum = 2022 - age;
console.log(name, 'родился в ', annum, 'году.');*/
//Третье задание
let str = '123321',
    x1 = (str - (str % 100000)) / 100000,
    x2 = (str - (str%10000)) / 10000 % 10,
    x3 = (str - (str%1000)) / 1000 % 10,
    x4 = (str - (str%100)) / 100 % 10,
    x5 = (str - (str%10)) / 10 % 10,
    x6 = str % 10;
if (x1 + x2 + x3 === x4 + x5 + x6 ){
    console.log('Да');
}else{
    console.log('Нет');
}
//Четвертое задание
let a = 1;
if (a > 0) {
    console.log('Верно');
}else {
    console.log('Неверно');
}
//Пятое задание
let b = 2;
a = 10;
console.log(a + b, a - b, a * b, a / b);
if (a + b > 1) {
    console.log((a + b)**2);
}
// Шестое задание
if (a > 2 && a < 11 || b >= 6 && b < 14) {
    console.log('Верно');
}else {
    console.log('Неверно');
}
//Седьмое задание 
let n = 1;
if (n >= 0 && n <=15) {
    console.log('Число n лежит в первой четверти часа');
}else if (n > 15 && n <=30) {
    console.log('Число n лежит во второй четверти часа');
}else if (n > 30 && n <=45) {
    console.log('Число n лежит в третьей четверти часа');
}else if (n > 45 && n <=59) {
    console.log('Число n лежит в четвертой четверти часа');
}else {
    console.log('Неверное значение');
}