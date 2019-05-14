// мой метод, с внутренней проверкой

function Calculator() {

    this.calculate = function(str) {
        
        let arrOfStrElements = str.split(" ");

        let a = parseInt(arrOfStrElements[0]);
        let b = parseInt(arrOfStrElements[2]);

        let name = arrOfStrElements[1];

        if (!this.calculate[name] || isNaN(a) || isNaN(b)) {
            return NaN;
        }; // например, вот такую проверку

        return this.calculate[name](a, b);

    };

    this.calculate["-"] = function(a, b) {
        return a - b;
    };

    this.calculate["+"] = function(a, b) {
        return a + b;
    };

    this.addMethod = function(name, func) {
        this.calculate[name] = func;
    };

};

// Канторовский метод, с внутренней проверкой
// function Calculator() {

//   var methods = {
//     "-": function(a, b) {
//       return a - b;
//     },
//     "+": function(a, b) {
//       return a + b;
//     }
//   };

//   this.calculate = function(str) {

//     var split = str.split(' '),
//       a = +split[0],
//       op = split[1],
//       b = +split[2]

//     if (!methods[op] || isNaN(a) || isNaN(b)) {
//       return NaN;
//     }

//     return methods[op](a, b);
//   }

//   this.addMethod = function(name, func) {
//     methods[name] = func;
//   };
// };


let calc = new Calculator;
alert( calc.calculate("9 ) 7") ); 

let powerCalc = new Calculator;


powerCalc.addMethod("*", function(a, b) {
    return a * b;
});
powerCalc.addMethod("/", function(a, b) {
    return a / b;
});
powerCalc.addMethod("**", function(a, b) {
    return Math.pow(a, b);
});

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8







