function printNumbersInterval() {
    let i = 1;
    let timerId = setInterval(function() {
      console.log(i);
      if (i == 20) clearInterval(timerId);
      i++;
    }, 100);
  }
  
  // вызов
  printNumbersInterval();

// и другой, но ресурсозатратный, способ:

// function printNumbersInterval() {

//     let i = 1;

//     function countOfNumbers() {
//         console.log(i);
//         return i++;
//     };

//     let timerId = setInterval(countOfNumbers, 100);

//     setInterval(function() {
//         clearInterval(timerId);
//     }, 2000)

// };

// printNumbersInterval();

