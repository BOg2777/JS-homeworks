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
let a = 10,
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
console.log(max(a,b));