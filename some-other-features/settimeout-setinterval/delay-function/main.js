function delay(f, ms) {

    return function() {

        let savedThis = this;
        let savedArgs = arguments;

        return setTimeout(function() {
            f.apply(savedThis, savedArgs);
        }, ms);
            
    };

};

// Именно обёртка возвращается декоратором delay и будет вызвана. 
// Чтобы передать аргумент и контекст функции, вызываемой через ms миллисекунд, 
// они копируются в локальные переменные savedThis и savedArgs.
// Это один из самых простых, и в то же время удобных способов передать что-либо 
// в функцию, вызываемую через setTimeout.

function f(x) {
    alert(x);
};

let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("тест"); // выведет "тест" через 1000 миллисекунд
f1500("тест2"); // выведет "тест2" через 1500 миллисекунд