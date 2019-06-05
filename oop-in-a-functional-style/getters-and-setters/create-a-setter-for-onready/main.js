function CoffeeMachine(power, capacity) {
    let waterAmount = 0;
  
    let WATER_HEAT_CAPACITY = 4200;
  
    function getTimeToBoil() {
      return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    };
  
    this.setWaterAmount = function(amount) {
      // ... проверки пропущены для краткости
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
        setTimeout(function() {
            onReady();
      }, getTimeToBoil());
    };
  
};

let coffeeMachine = new CoffeeMachine(20000, 500);
coffeeMachine.setWaterAmount(150);

coffeeMachine.setOnReady(function() {
  let amount = coffeeMachine.getWaterAmount();
  alert( 'Готов кофе: ' + amount + 'мл' ); // Кофе готов: 150 мл
});


coffeeMachine.run();