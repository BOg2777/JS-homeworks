let histoty = [];
let Calculator = function() {
    this.on = function() {
        if(prompt('Включить калькулятор?') == 'да'){
            this.get()
        }else {
            alert('Калькулятор выключен, чтобы у вас появилась возможность включить его перезагрузите сайт');
        }
    }
    this.get = function() {
        this.a = +prompt('Введите число a');
        this.b = +prompt('Введите число b');
        this.oper = prompt('Введите операцию: +, -, *, /');

        this.operation()
    }
    this.operation = function() {
        switch(this.oper) {
            case '+':
                this.result = this.a + this.b;
            break; 
            case '-':
                this.result = this.a - this.b;
            break; 
            case '*':
                this.result = this.a * this.b;
            break; 
            case '/':
                this.result = this.a / this.b;
            break;
            default: this.result = 'Ошибка';
        }
        this.show()
    }
    this.show = function() {
        alert(this.a + ' ' + this.oper + ' ' + this.b + ' = ' + this.result)
        this.on()
        histoty.push(this.a + ' ' + this.oper + ' ' + this.b + ' = ' + this.result);
    } 
}
let calculator = new Calculator;
calculator.on()
console.log('История: ', histoty);