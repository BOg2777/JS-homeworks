//Первый пункт
let  str = 'Привет',
    sum = 123,
    num = 15.8,
    flag = true,
    txt = 'true';
console.log(typeof str,typeof sum,typeof num,typeof flag,typeof txt );
//Второй пункт
let a1 = 5 % 3,
    a2 =3%5,
    a3 = 5 + '3',
    a4 = '5' - 3,
    a5 = 75 + 'кг',
    a6 = 785 * 653,
    a7 = 100 / 25,
    a8 = 0 * 0,
    a9 = 0 / 2,
    a10 = 89 / 0,
    a11 = 98 + 2,
    a12 = 5 - 98,
    a13 = (8 + 56 * 4) / 5,
    a14 = (9 - 12) * 7 / (5 + 2),
    a15 = +"123",
    a16 = 1 || 0,
    a17 = false || true,
    a18 = true > 0;
console.log(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18 );
console.log(typeof a1,typeof a2,typeof a3,typeof a4,typeof a5,typeof a6,typeof a7,typeof a8,typeof a9,typeof a10,typeof a11,typeof  a12,typeof  a13,typeof  a14,typeof  a15,typeof  a16,typeof a17,typeof  a18);
//Третий пункт
let width = 23,
    height = 10,
    SPryam = width*height;
console.log('Площадь прямоугольника равна',  SPryam, 'см.');
//Четвертый пункт
let h = 10;
    VCilindra = 3.14/4*h**2*a7;
console.log('Обьем цилиндра равен', VCilindra, 'метров кубических.');
//Пятый пункт
let r = 5,
    SKruga = 3.14*r**2;
console.log('Площадь круга равна', SKruga, 'сантиметров квадратных.');
//Шестой пункт
let a = 5,
    b = 7;
h = 10;
let STrap = 1/2*(a+b)*h;
console.log('Площадь трапеции равна', STrap, 'сантиметров квадратных.');
//Седьмой пункт
let S = 2000000,
    p = 0.1,
    years = 5,
    Pereplata = S*p*years;
console.log('Переплата за 5 лет с годовой ставкой 10% равна',  Pereplata);
//Восьмой пункт
a = 8;
b = 3;
//a+2(x-b)=16;
let x = (16 + 2*b - a) / 2;
console.log('a+2(x-b)=16, x = ', x);
//b(x+15)=a+6x;
x = (a - 15*b) / (b - 6);
console.log('b(x+15)=a+6x, x = ', x);
//x+2x+ax+bx=23780
x = 23780 / (1 + 2 + a + b);
console.log('x+2x+ax+bx=23780, x = ', x);
//Девтый пункт
console.log('');
console.log('Бывало, спит у ног собака,');
console.log('костер занявшийся гудит,');
console.log('и женщина из полумрака');
console.log('глазами зыбкими глядит.');
console.log('');
console.log('Потом под пихтою приляжет');
console.log('на куртку рыжую мою');
console.log('и мне, задумчивая, скажет:');
console.log('');
console.log('"А ну-ка, спой!.."- и я пою.');
//Десятое задание
let text1 = 'индо земля зашаталась под ногами-и вырос,',
    text2 = 'и заревел он голосом диким…',
    text3 = 'блеснула молния и ударил гром,',
    text4 = 'а так какое-то чудище, страшное и мохнатое,',
    text5 = 'как будто из-под земли, перед купцом:',
    text6 = 'Он подошёл и сорвал аленький цветочек.',
    text7 = 'зверь не зверь, человек не человек,',
    text8 = 'В ту же минуту, безо всяких туч,';
console.log(text6, text8, text3, text5, text1, text7, text4, text2);