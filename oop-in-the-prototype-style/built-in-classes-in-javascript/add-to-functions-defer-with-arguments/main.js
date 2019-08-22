Function.prototype.defer = function(ms) {
    let f = this; // наша текущая функция function f(a, b) {alert( a + b );};

    return function() {

        let context = this; // [object Window]
        let args = arguments;

        setTimeout(function(){
            f.apply(context, args);
        }, ms);

    };
    
};

function f(a, b) {
    alert( a + b );
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду