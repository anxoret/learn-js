function work(a, b) {
    alert( a + b ); // work - произвольная функция
};

function makeLogging(func, log) {

    return function wrapper(a, b) {

        log.push([a, b]);

        return func.apply(this, [a, b]);

    };

};

let log = [];
work = makeLogging(work, log);

work(1, 2); // 3
work(4, 5); // 9

for (var i = 0; i < log.length; i++) {
  var args = log[i]; // массив из аргументов i-го вызова
  alert( 'Лог:' + args.join() ); // "Лог:1,2", "Лог:4,5"
}

