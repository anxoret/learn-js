function Calculator() {
    this.read = function() {
        this.a = +prompt("Напишите первое число", 1);
        this.b = +prompt("Напишите второе число", 2);
    },

    this.sum = function() {
        return this.a + this.b;
    },

    this.mul = function() {
        return this.a * this.b;
    }
};

let calculator = new Calculator();
calculator.read();

alert( "Сумма=" + calculator.sum() );
alert( "Произведение=" + calculator.mul() );