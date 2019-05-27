function printNumbersInterval() {
    let i = 1;

    let timerId = setTimeout(function run() {
        console.log(i);
        if (i < 20) setTimeout(run, 100);
        i++;
    }, 100);

};

printNumbersInterval();