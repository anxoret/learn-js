// вариант просто с "одалживанием метода"
function sumArgs() {
    // скопируем reduce из массива
    arguments.reduce = [].reduce;

    return arguments.reduce(function(a, b) {
      return a + b;
    });
};

alert( sumArgs(1, 2, 3) ); // 6, аргументы переданы через запятую, без массива


// вариант решения через "одалживание метода" и call

// function sumArgs() {

//     let reduce = [].reduce;

//     return reduce.call(arguments, function(a, b) {
//         return a + b;
//     });

//     // либо ещё короче без сохранения [].reduce в переменную:
//     // return [].reduce.call(arguments, function(a, b) {
//     //     return a + b;
//     // });

// };
  
// alert( sumArgs(1, 2, 3) ); // 6, аргументы переданы через запятую, без массива

// вариант решения через "одалживание метода" и apply 
// (НЕПОНЯТНО, ПРАВИЛЬНЫЙ ЛИ МЕТОД РЕШЕНИЯ)

// function sumArgs() {

//     // arguments.reduce = [].reduce;
//     // либо просто:

//     return [].reduce.apply(arguments, [function(a, b) {
//         return a + b;
//     }]);

// };

// либо последний вариант вот так:
// function sumArgs() {

//   let arr = [].slice.call(arguments);

//   reduce = [].reduce;



//   return reduce.apply(arr, [function(a,b) {
//       return a + b;
//   }]);

// }; 

// alert( sumArgs(1, 2, 3) ); // 6, аргументы переданы через запятую, без массива

