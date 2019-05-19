function applyAll(func) {

  let arr = [].slice.call(arguments);

  let arrOfNumbers = arr.slice(1);

  return func.apply(this, arrOfNumbers);

};

// либо очень простое Канторовское решение:
// function applyAll(func) {
//     return func.apply(this, [].slice.call(arguments, 1));
// };


// Применить Math.max к аргументам 2, -2, 3
alert( applyAll(Math.max, 2, -2, 3) ); // 3

// Применить Math.min к аргументам 2, -2, 3
alert( applyAll(Math.min, 2, -2, 3) ); // -2

function sum() { // суммирует аргументы: sum(1,2,3) = 6
    return [].reduce.call(arguments, function(a, b) {
      return a + b;
    });
  }
  
  function mul() { // перемножает аргументы: mul(2,3,4) = 24
    return [].reduce.call(arguments, function(a, b) {
      return a * b;
    });
  }
  
  alert( applyAll(sum, 1, 2, 3) ); // -> sum(1, 2, 3) = 6
  alert( applyAll(mul, 2, 3, 4) ); // -> mul(2, 3, 4) = 24