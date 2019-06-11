function Hamster() {
    this.food = [];
}

Hamster.prototype.found = function(something) {
  this.food.push(something);
};

// Создаём двух хомяков и кормим первого
let speedy = new Hamster();
let lazy = new Hamster();

speedy.found("яблоко");
speedy.found("орех");

alert( speedy.food.length ); // 2
alert( lazy.food.length ); // 0