//Первое задние
console.log('aaa@bbb@ccc'.replace(/@/g, '!'));
//Второе задание
let data = '2025-12-31';
data = data.replace(/(2025)(-)(12)(-)(31)/, '$5$4$3$2$1');
data = data.replace(/-/g, '/');
console.log(data);
//Третье задание
let str = 'Я учу javascript!';
str1 = str.slice(0, 2);
str2 = str.slice(str.length-1, str.length);
str = str1 + str2;
console.log(str);
str = 'Я учу javascript!';
str1 = str.substring(0, 2);
str2 = str.substring(str.length-1, str.length);
str = str1 + str2;
console.log(str);
//Четвертое задание
let x = [4, 2, 5, 19, 13, 0, 10],
    sum = 0;
for(let i = 0; i < x.length; i++){
    sum += Math.pow(x[i], 3);
}
console.log(Math.sqrt(sum));
//Пятое задание
let a = 3,
    b = 5,
    c = Math.abs(a - b);
console.log(c);
//Шестое задание
let dateNow = new Date();
console.log(dateNow.getHours() + ':' + dateNow.getMinutes() + ':' + dateNow.getSeconds(), dateNow.toLocaleDateString('ru'));
//Седьмое задание
let string = 'aa aba abba abbba abca abea';
console.log(string.match(/ab{1,}a/gi));
//Восьмое задание
let string1 = '80333506823';
let regext = /80[1-9]{1,3}[1-9]{1,3}[0-9]{7}/g;
console.log(regext.test(string1));
//Девятое задание (без спец символов)
let email = 'timohamalu2005@mail.ru';
function cheked (x) {
    let reg = /([a-z][0-9]{0-100}||[a-z]{1-100}||[0-9]{0-100}@[a-z]{2-11}.[a-z]{2-11})/g,
        reg2 = /[а-я]{1-100}/g;
    if(!reg2.test(x) && reg.test(x)){
        console.log(true);
    }else {
        console.log(false);
    }
}
cheked(email);
//Десятое задание
let src = 'https://tech.onliner.by/2018/04/26/smart-do-200/?utm_source=main_tile&utm_medium=smartdo200#zag3';
function split (x) {
    let indexsrc = x.indexOf('/', 15),
        src1 = '';
    for(let i = 0; i < indexsrc; i++){
        src1 += x[i];
    }
    let parametrssrc = x.indexOf('?', indexsrc),
        parametrs = '';
    for(let i = indexsrc; i < parametrssrc; i++){
        parametrs += x[i];
    }
    let xeh = '';
    for(let i = parametrssrc; i < x.length; i++){
        xeh += x[i];
    }
    let source = {};
    source['Адрес доменного имени'] = src1;
    source['Остальная часть адреса без параметров'] = parametrs;
    source['Хеш'] = xeh;
    console.log(source)
}
split(src);