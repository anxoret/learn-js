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

    this.filterFood = function(func) {
      return food.filter(func);
    };

    this.removeFood = function(item) {
        for (let i = 0; i < food.length; i++) {
            if (food[i].title == item.title) {
                food.splice(i, 1);
                i--;
            };
        };

        // либо короткий вариант по Кантору:
        // let idx = food.indexOf(item);
        // if (idx != -1) food.splice(idx, 1);
    };

};

let fridge = new Fridge(500);

fridge.enable();

fridge.addFood({
  title: "котлета",
  calories: 100
});

fridge.addFood({
  title: "сок",
  calories: 30
});

fridge.addFood({
  title: "зелень",
  calories: 10
});

fridge.addFood({
  title: "варенье",
  calories: 150
});

fridge.removeFood("нет такой еды"); // без эффекта
alert( fridge.getFood().length ); // 4

let dietItems = fridge.filterFood(function(item) {
  return item.calories < 50;
});

dietItems.forEach(function(item) {
  alert( item.title ); // сок, зелень
  fridge.removeFood(item);
});

alert( fridge.getFood().length ); // 2

