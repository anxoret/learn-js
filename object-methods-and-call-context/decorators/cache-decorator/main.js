function f(x) {
    return Math.random() * x; // random для удобства тестирования
};

function makeCaching(f) {

    let cache = {};

    return function wrapper(x) {

        if (!(x in cache)) {
            cache[x] = f.call(this, x);
        }

        return cache[x];
        
    };

};

f = makeCaching(f);

let a, b;

a = f(1);
b = f(1);
alert( a == b ); // true (значение закешировано)

b = f(2);
alert( a == b ); // false, другой аргумент => другое значение