function work(a) {
    /* ... */ // work - произвольная функция, один аргумент
};

// декоратор makeLogging(f, log), который берет функцию f и массив log
function makeLogging(f, log) {

    return function wrapper() {

        log.push(arguments[0]);

        return f.apply(this, arguments); 
        /*- этот приём называется «форвардинг вызова» (от англ. forwarding): 
        текущий контекст и аргументы через apply передаются в функцию f, 
        так что изнутри f всё выглядит так, как была вызвана она напрямую, а не декоратор.*/

    };

};

let log = [];
work = makeLogging(work, log);

work(1); // 1, добавлено в log
work(5); // 5, добавлено в log

for (var i = 0; i < log.length; i++) {
  alert( 'Лог:' + log[i] ); // "Лог:1", затем "Лог:5"
}