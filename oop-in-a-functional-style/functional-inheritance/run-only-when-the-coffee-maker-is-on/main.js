function CoffeeMachine(power, capacity) {
    let waterAmount = 0;
    let WATER_HEAT_CAPACITY = 4200;
    let timerId;
    this._enabled = false;
  
    function getTimeToBoil() {
      return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    };
  
    this.setWaterAmount = function(amount) {
        if (amount < 0) {
            throw new Error("Значение должно быть положительным");
        }
        if (amount > capacity) {
            throw new Error("Нельзя залить больше, чем " + capacity);
        }

        waterAmount = amount;
    };
  
    this.getWaterAmount = function(amount) {
      return waterAmount;
    };
  
    function onReady() {
        alert( "Кофе готов!" );
    };

    this.setOnReady = function(newOnReady) {
        onReady = newOnReady;
    };
    

    this.run = function() {

        if (!this._enabled) { // либо условие this._enabled === false
            throw new Error("Ошибка, кофеварка выключена!");
        };

        timerId = setTimeout(function() {
            timerId = null;
            onReady();
        }, getTimeToBoil());

    };

    this.isRunning = function() {
        return !!timerId;
    };

    this.enable = function() {
        enabled = true;
    };

    this.disable = function() {
        enabled = false;
    };
  
};

let coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.run(); // ошибка, кофеварка выключена!
coffeeMachine.enable();
coffeeMachine.run(); // ...Кофе готов!
