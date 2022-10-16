let startInputBudget = document.getElementById('startInput');
let startBtn = document.getElementById('startBtn');
let startMenu = document.getElementById('startInformation');
let budget = document.getElementById('mainBudget');
let leftBudget = document.getElementById('mainLeftBudget');
let mainBtn = document.getElementById('mainBtn');
let inputName = document.getElementById('mainInputName');
let inputPrice = document.getElementById('mainInputPrice');
let shoppingList = document.getElementById('shoppingList');
let mainText = document.getElementById('mainText');

startBtn.addEventListener('click', addBudget);

function addBudget () {
    budgetValue = Number(startInputBudget.value);
    priceAll = 0;
    if(String(budgetValue) != 'NaN' && budgetValue != 0){
        startMenu.classList.add('displayNone');
        budget.innerText += budgetValue;
        leftBudget.innerText += budgetValue; 
        mainBtn.addEventListener('click', countBudget);
    }else{
        alert('Введите свой бюджет');
    }
}
function countBudget () {
    name = String(inputName.value);
    price = Number(inputPrice.value);
    if(name != ''){
        budgetValue = budgetValue - price;
        priceAll += price;
        if(budgetValue >= 0){ 
            inputName.value = '';
            inputPrice.value = '';
            budget.innerText = 'Budget: $' + budgetValue;
            leftBudget.innerText = 'Left: $' + priceAll ;
            addNamePrice();
        }else{
            let p = document.createElement('p');
            p.classList.add('error');
            p.innerHTML = 'У вас осталось меньше чем вы хотите потратить';
            mainText.appendChild(p);
        }
    }else(
        alert('Введите название покупки')
    )
}
function addNamePrice() {
    let p = document.createElement('p');
    p.classList.add('buyList');
    p.innerHTML = name + ': $' + price;
    shoppingList.appendChild(p);
}