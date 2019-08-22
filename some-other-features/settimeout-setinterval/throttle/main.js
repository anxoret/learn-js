function throttle(f, ms) {

    let isThrottled = false,
        savedThis, 
        savedArgs;

    return function wrapper() {

        if (isThrottled) {
            savedThis = this;
            savedArgs = arguments;
            return;
        }

        f.apply(this, arguments);

        isThrottled = true;

        setTimeout(function() {
            isThrottled = false;
            if (savedThis) {
                f.apply(savedThis, savedArgs);
                savedThis = savedArgs = null;
            };

        }, ms);

    };

};

let f = function(a) {
    //console.log(a);
    alert(a);
};

// затормозить функцию до одного раза в 1000 мс
let f1000 = throttle(f, 1000);

f1000(1); // выведет 1
f1000(2); // (тормозим, не прошло 1000 мс)
f1000(3); // (тормозим, не прошло 1000 мс)


// когда пройдёт 1000 мс...
// выведет 3, промежуточное значение 2 игнорируется