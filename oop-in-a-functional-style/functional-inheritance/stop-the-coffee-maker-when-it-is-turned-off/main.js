function Machine(power) {
    this._enabled = false;

    this.enable = function() {
      this._enabled = true;
    };

    this.disable = function() {
      this._enabled = false;
    };
};

function CoffeeMachine(power) {
    Machine.apply(this, arguments);

    let waterAmount = 0;
    let timerId;

    this.setWaterAmount = function(amount) {
        waterAmount = amount;
    };

    function onReady() {
        alert("Кофе готов!");
    }

    this.run = function() {
        if (!this._enabled) {
            throw new Error("Кофеварка выключена");
        }
        timerId = setTimeout(onReady, 1000);
    };

    let parentDisable =  this.disable;

    this.disable = function() {
        clearTimeout(timerId);
        parentDisable.call(this);
    };

};

let coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.enable();
coffeeMachine.run();
coffeeMachine.disable(); // остановит работу, ничего не выведет

