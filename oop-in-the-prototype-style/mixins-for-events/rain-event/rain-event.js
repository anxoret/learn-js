function Rain() {

    this.isGoing = function() {
        alert("Дождь идёт!");
    };

    this.isNotGoing = function() {
        alert("Дождь не идёт!");
    }

};

for (let key in eventMixin) {
    Rain.prototype[key] = eventMixin[key];
};

// Генерирует событие rainAction 
Rain.prototype.action = function() {
    this.trigger("rainAction");
};

Rain.prototype.action = function() {
    this.trigger("rainAction");
};

Rain.prototype.stop = function() {
    this.trigger("rainStop");
};

// Создаем объект дождь
let rain = new Rain();

// При наступлении события rainAction вызвать эту функцию
rain.on("rainAction", function(){
    this.isGoing();
    android.putOnBoots();
    android.openUmbrella();
    alert("андроид готов к дождю: \nБотинки одеты: " + android._state.bootsAreOn + 
        "\nЗонт открыт: " + android._state.umbrellaIsOpen);
});

rain.on("rainStop", function(){
    this.isNotGoing();
    android.takeOffBoots();
    android.closeUmbrella();
    alert("андроид: \nБотинки одеты: " + android._state.bootsAreOn + 
        "\nЗонт открыт: " + android._state.umbrellaIsOpen);
});

// Запускаем выбор (событие rainAction вызовет обработчики)
rain.action();
rain.stop();

