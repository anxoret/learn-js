function CoffeeMachine(power) {
    // свойства конкретной кофеварки
    this._power = power;
    this._waterAmount = 0; 
};

// свойства и методы для всех объектов класса
CoffeeMachine.prototype.WATER_HEAT_CAPACITY = 4200;

CoffeeMachine.prototype.getTimeToBoil = function() {
    return this._waterAmount * this.WATER_HEAT_CAPACITY * 80 / this._power;
};

CoffeeMachine.prototype.run = function() {
    setTimeout(function() {
      alert( 'Кофе готов!' );
    }, CoffeeMachine.prototype.getTimeToBoil());
};

CoffeeMachine.prototype.setWaterAmount = function(amount) {
    this._waterAmount = amount;
}; 

let coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.setWaterAmount(50);
coffeeMachine.run();