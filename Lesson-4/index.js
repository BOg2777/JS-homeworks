//Первое задание
/*let a = [1, 2, 3, 4, 5];
for(let i = 0; i < a.length; i++){
    console.log(a[i]);
}
//Второе задание
a = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
for(let i = 0; i < a.length; i++){
    if(a[i] < -3 && a[i] > -10){
        console.log(a[i]);
    }
}*/
//Третье задание
let b = [],
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
console.log(result);