function CoffeeMachine(power, capacity) {

    this.getPower = function() {
        return power;
    }

    this.setWaterAmount = function(amount) {
        if (amount < 0) {
            throw new Error("Значение должно быть положительным");
        }
        if (amount > capacity) {
            throw new Error("Нельзя залить воды больше, чем " + capacity);
        }
  
        waterAmount = amount;
    };
  
    this.getWaterAmount = function() {
        return waterAmount;
    };
  
};

let cof = new CoffeeMachine(100, 200);

alert(cof.getPower());