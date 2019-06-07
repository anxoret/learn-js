function Machine(power) {
    this._power = power;
    this._enabled = false;

    // let self = this;

    this.enable = function() {
      this._enabled = true;
    };

    this.disable = function() {
      this._enabled = false;
    };
};

function Fridge(power) {
    Machine.apply(this, arguments);

    let food = []; // создали приватное свойство

    this._capacity = this._power / 100;

    this.addFood = function(item) {

        if (!this._enabled /*= false*/ ) {
            throw new Error ("Холодильник выключен. Вы не можете добавить еду.");
        };

        let foodToAdd = [].slice.call(arguments);

        for (let i = 0; i < foodToAdd.length; i++) {

            if ( (food.length + 1) > this._capacity) {
                throw new Error ("Холодильник переполнен. Вы не можете добавить еду.");
            };

            food.push(foodToAdd[i]);

        };

    };

    this.getFood = function() {
        return food.slice();
    };

};

// let fridge1 = new Fridge(200);
// fridge1.enable();
// fridge1.addFood("котлета"); // Холодильник выключен. Вы не можете добавить еду.
// fridge1.getFood();

// создать холодильник мощностью 500 (не более 5 еды)
// let fridge2 = new Fridge(500);
// fridge2.enable();
// fridge2.addFood("котлета");
// fridge2.addFood("сок", "зелень");
// alert(fridge2.getFood());
// fridge2.addFood("варенье", "пирог", "торт"); // Холодильник переполнен. Вы не можете добавить еду.
// alert(fridge2.getFood());

// let fridge = new Fridge(500);
// fridge.enable();
// fridge.addFood("котлета");
// fridge.addFood("сок", "варенье");

// let fridgeFood = fridge.getFood();
// alert( fridgeFood ); // котлета, сок, варенье

// добавление элементов не влияет на еду в холодильнике
// food.push("вилка", "ложка");

// alert( fridge.getFood() ); // внутри по-прежнему: котлета, сок, варенье