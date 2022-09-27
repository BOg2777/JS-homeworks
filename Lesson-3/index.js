//Первое задание
/*for(let i = 1; i <= 50; i++){
    console.log(i);
}
for(let i = 35; i >= 8; i--){
    console.log(i);
}
//Второе задание
let i = 89;
while(i >= 11){
    console.log(i);
    i--;

//Третье задание
let sum = 0;
for(let i = 0; i <= 100; i++){
    sum += i;
}
console.log(sum);
//Четвертое задание
let sum = 0;
for(let i = 0; i <= 5; i++){
    sum += i;
    console.log(sum);
}
//Пятое задание
//while
let i = 8;
while(i <= 56){
    if(i % 2 === 0){
        console.log(i);
    }
    i++;
}
//for
for(i = 8; i <= 56; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}
//Шестое задание
for(let i = 2; i <= 10; i++){
    for(let j = 2; j <= 10; j++){
        console.log(i, '*', j, '=', i*j);
    }
}
//Седьмое задание
let num = 0,
    n = 1000;
for(n = 1000; n >= 50; n = n / 2){
    num++;
}
console.log('Получилось число =', n);
console.log('Количество операций = ', num);*/
//Восьмое задание
let sum = 0,
    sr = 0,
    i = 0;
for(let x = prompt('Введите число'); Number(x) != 0 & x != ''; x = prompt('Введите число')){
    if(Number(x) == x){
        i++;
        sum += Number(x);
        sr = sum / i;
    }else{
        console.log('Ошибка');
        break;
    }
}
console.log('Сумма чисел = ', sum, 'Среднее арифметическое =', sr)
