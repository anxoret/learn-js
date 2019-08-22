function Accumulator(startingValue) {

    this.value = startingValue;

    this.read = function() {
        this.value = this.value + +prompt("Напишите число", "0");
        // либо просто this.value += +prompt("Напишите число", "0");
    } 
    
};

let accumulator = new Accumulator(1); // начальное значение 1
accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению
alert( accumulator.value ); // выведет текущее значение