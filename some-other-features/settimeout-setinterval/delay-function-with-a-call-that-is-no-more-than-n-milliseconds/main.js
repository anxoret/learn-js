function debounce(f, ms) {
    
    let timerId = false;
    
    return function() {

        if (timerId) {
            clearTimeout(timerId);
        };

        let savedThis = this;
        let savedArgs = arguments;

        return timerId = setTimeout(function() {
            f.apply(savedThis, savedArgs);
        }, ms);

    };

};

function f(x) {
    alert(x);
};

f = debounce(f, 1000);

f(1); // вызов отложен на 1000 мс
f(2); // предыдущий отложенный вызов игнорируется, 
// текущий (2) откладывается на 1000 мс

// через 1 секунду будет выполнен вызов f(2)

setTimeout( function() { f(3) }, 1100); // через 1100 мс отложим вызов еще на 1000 мс
setTimeout( function() { f(4) }, 1200); // игнорируем вызов (3)

// через 2200 мс от начала выполнения будет выполнен вызов f(4)



// let f1000 = debounce(f, 1000);
// let f1500 = debounce(f, 1500);

// f1000("тест"); // выведет "тест" через 1000 миллисекунд
// f1500("тест2"); // выведет "тест2" через 1500 миллисекунд

// решение по Кантору:

// function debounce(f, ms) {

//     let timer = null;
  
//     return function (...args) {
//       const onComplete = () => {
//         f.apply(this, args);
//         timer = null;
//       }
  
//       if (timer) {
//         clearTimeout(timer);
//       }
  
//       timer = setTimeout(onComplete, ms);
//     };
//   }
  
//   function f(x) { alert(x) }
//   f = debounce(f, 1000);
  
//   f(1); // вызов отложен на 1000 мс
//   f(2); // предыдущий отложенный вызов игнорируется, текущий (2) откладывается на 1000 мс
  
//   // через 1 секунду появится alert(2)
  
//   setTimeout( function() { f(3) }, 1100); // через 1100 мс отложим вызов еще на 1000 мс
//   setTimeout( function() { f(4) }, 1200); // игнорируем вызов (3)
  
//   // через 2200 мс от начала выполнения появится alert(4)