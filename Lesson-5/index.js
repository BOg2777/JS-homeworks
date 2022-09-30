//Первое задание
/*function work(x1,x2,x3){
    return (x1 - x2) / x3
}
console.log(work(19,2,9))*/
//Второе задание
/*function degree(x){
    y = x**3;
    y1 = x**2;
    return 'Куб числа = ' + String(y) + '.Квадрат числа = ' + String(y1) 
}
console.log(degree(10));*/
//Третье задание
/*let a = 10,
    b = 15;
function min(x1,x2){
    if(x1 > x2) return 'Меньшее из двух чисел b = ' + String(x2);
    else return 'Меньшее из двух чисел a = ' + String(x1);
}
function max(x1,x2){
    if(x1 > x2) return 'Большее из двух чисел a = ' + String(x1);
    else return 'Большее из двух чисел b = ' + String(x2);
}
console.log(min(a,b));
console.log(max(a,b));*/
//Четвертое задание
/*let a = [];
function input(x1,x2){
    x1 = prompt('Введите первое число диапазона')
    x2 = prompt('Введите последнее число диапазона')
    for(let i = x1; i <= x2; i++){
        a.push(i);
    }
}
function output(){
    for(let i = 0; i < a.length; i++){
        console.log(a[i]);
    }
}
input(10,15);
output();*/
//Пятое задание
function  isEven(x1){
    if(x1 % 2 == 0) return true;
    else return false;
}
console.log( isEven(11));