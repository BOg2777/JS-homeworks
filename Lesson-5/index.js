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
/*function  isEven(x1){
    if(x1 % 2 == 0) return true;
    else return false;
}
console.log( isEven(11));
//Шестое задание
let arr1 = [],
    arr2 = [];
function arr(){
    for(let i = 0; i <= 10; i++){
        arr1[i] = i;
    }
}
function ar(){
    for(let i = 0; i < arr1.length; i++){
        if(isEven(arr1[i])) arr2.push(arr1[i])
    }
}
arr();
ar();
console.log(arr2);*/
//Седьмое задание
/*function pyramid(x1,x2){
    if(x2 == null){
        for(let i = 1; i <= x1; i++){
            for(let j = 1; j <= i; j++){
                document.write(i);
            }
            document.write('</br>');
        }
    }else{
        for(let i = 1; i <= x1; i++){
            for(let j = 1; j <= i; j++){
                document.write(x2);
            }
            document.write('</br>');
        }
    }
}
pyramid(9,'+');*/
//-Восьмое задание
/*function pyramid(x1){
    for(let i = 1; i <= x1; i++){
        for(let j = 1; j <= i; j++){
            document.write('*');
        }
        document.write('</br>');
    }
}
pyramid(2);*/
//Девятое задание
/*function Fibonachi(){
    let arr = [0,1,1],
        x1 = 1,
        x2 = 1,
        x3 = 0;
    for(let i = 0; i < 1000; i = x3){
        x3 =x1 + x2;
        x1 = x2;
        x2 = x3; 
        arr.push(x3);
    }
    arr.length = arr.length - 1;
    console.log(arr);
}
Fibonachi();*/
//-Десятое задание
//ОДиннадцатое задание
/*let i = 0;
function arr(x){
    if(i < x.length){
        console.log(x[i]);
        i++;
        arr(x);
    }
}
arr([12,32,512,'qwe']);*/
//-Двенадцатое задание
/*function data(){
    let name = prompt('Введите имя'),
        secondname = prompt('Введите фамилию'),
        thirdname = prompt('Введите отчество'),
        group = prompt('Введите вашу группу'),
        firststr = 'Домашняя работа "Функции"',
        secondstr = 'Выполнил: студент группы ' + group,
        thirdstr = name + ' ' + secondname + ' ' + thirdname,
         i = 0;
    if(firststr.length >= secondstr.length && firststr.length >= thirdstr.length){
        i = firststr.length;
    }else if(secondstr.length >= firststr.length && secondstr.length >= thirdname.length){
        i = secondstr.length;
    }else{
        i = thirdstr.length;
    }
    for(let z = 0; z <= i+3; z++){
        document.write('*');
    }
    document.write('</br>');
    document.write('* ' + firststr);
    // for(let z = firststr.length; z <= i+3; z++){
    //     document.write('+');
    // }
    document.write('*');
    document.write('</br>');
    document.write('* ' + secondstr);
    document.write('*');
    document.write('</br>');
    document.write('* ' + thirdstr );
    document.write('*');
    document.write('</br>');
    for(let z = 0; z <= i+3; z++){
        document.write('*');
    }
}
data();*/
//-Тринадцатое задание