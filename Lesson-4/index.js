//Первое задание
/*let a = [1, 2, 3, 4, 5];
for(let i = 0; i < a.length; i++){
    console.log(a[i]);
}*/
//Второе задание
/*a = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
for(let i = 0; i < a.length; i++){
    if(a[i] < -3 && a[i] > -10){
        console.log(a[i]);
    }
}*/
//Третье задание
/*let b = [],
    c = [],
    i = 23,
    result = 0;
for(i = 23; i <= 57; i++){
    b.push(i);
}
i = 23;
while(i < 57){
    i++;
    c.push(i);
}
console.log(b);
console.log(c);
for(i = 0; i < b.length; i++){
    result += b[i];
}
console.log(result);*/
//Четвертое задание
/*let a = ['10', '20', '30', '50', '235', '3000'];
for(let i = 0; i < a.length; i++){
    if(a[i][0] == 1 || a[i][0] == 2 || a[i][0] == 5){
        console.log(a[i]);
    }
}*/
//Пятое задание
/*let days = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПН', 'СБ', 'ВС'];
for(let i = 0; i < days.length; i++){
    if(days[i] == 'СБ' || days[i] == 'ВС'){
        document.write('<b>' + days[i] + '</b>' + '</br>');
    }else {
        document.write(days[i] + '</br>');
    }
}*/
//Шестое задание
/*let a = ['11' , '231'];
a[a.length] = 'I';
console.log(a);*/
//Седьмое задание
/*let a = [];
for(let x = prompt('Введите число');x != ''; x = prompt('Введите число')){
    a.push(x);
}
console.log(a);
function sort(x,y){
    return x - y;
}
a.sort(sort);
console.log(a);*/
//Восьмое задание
/*let a = [12, false, 'Текст', 4, 2, -5, 0],
    i = a.length;
while(i > 0){
    i--;
    console.log(a[i]);
}
a.reverse();
console.log(a);*/
//Девятое задание
/*let a = [5, 9, 21, , , 9, 78, , , , 6],
    count = 0;
for(let i = 0; i < a.length; i++){
    if(a[i] == null){
        count++;
    }
}
console.log(count);*/
//Десятое задание
/*let a = [1,8,0,13,76,8,7,0,22,0,2,3,2],
    count0 = 0;
for(let i = 0; i < a.length; i++){
    if(a[i] == 0){
        count0++;
    }
}
if(count0 < 2){
    console.log('В массиве количество 0 меньше 2')
}else{
    let first = a.indexOf(0),
        second = a.lastIndexOf(0),
        sum = 0;
    for(let i = first; i < second; i++){
        sum += a[i];
    }
    console.log(sum);
}*/
//Одиннадцатое задание 
/*let x = prompt('Введите высоту');
for( let i = 1; i <= x; i++){
    for( let j = 1; j <= i; j++){
        for(let y = 1; y <= j; y++){
            document.write('1')
        }
        document.write('^');
    }
    document.write('</br>')
}
function tr(x){
    for( let i = x; i >= 1; i--){
        for( let j = x; j >= i; j--){
            for(let y = j; y >= j; y--){
                document.write('')
            }
            document.write('^');
        }
        document.write('</br>')
    }
}
tr(x);*/