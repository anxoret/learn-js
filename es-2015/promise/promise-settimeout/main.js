function doSomething() {
    setTimeout(() => {
        console.info("Функция doSomething выполнена");
    }, 2000);
};

function delay(ms) {

    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });

};

delay(3000)
    .then( () => doSomething() )



// function delay(ms) {
//     return new Promise((resolve, reject) => {
//       setTimeout(resolve, ms);
//     });
// };

// delay(1000)
//   .then(() => alert("Hello!"))