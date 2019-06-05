function CoffeeMachine(power, capacity) {
    let waterAmount = 0;
  
    let WATER_HEAT_CAPACITY = 4200;
  
    function getTimeToBoil() {
      return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }
  
    this.setWaterAmount = function(amount) {
      if (amount < 0) {
        throw new Error("Значение должно быть положительным");
      }
      if (amount > capacity) {
        throw new Error("Нельзя залить больше, чем " + capacity);
      }
  
      waterAmount = amount;
    };
  
    function onReady() {
      alert( 'Кофе готов!' );
    }
  
    this.run = function() {
      setTimeout(onReady, getTimeToBoil());
    };

    // лучше решить так:

    this.addWater = function(amount) {
        this.setWaterAmount(waterAmount + amount);
    }

    // либо таким долгим способом:
    // this.addWater = function(amount) {

    //     let newWaterAmount = waterAmount + amount;

    //     if (newWaterAmount < 0) {
    //         throw new Error("Значение должно быть положительным");
    //     } 

    //     if (newWaterAmount > capacity) {
    //         throw new Error("Нельзя залить больше, чем " + capacity);
    //     }

    //     waterAmount = newWaterAmount;
        
    // };
  
};

let coffeeMachine = new CoffeeMachine(100000, 400);
coffeeMachine.addWater(200);
coffeeMachine.addWater(100);
coffeeMachine.addWater(300); // Нельзя залить больше, чем 400
coffeeMachine.run();