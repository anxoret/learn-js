// try {
//     function calculator() {
//         let str = prompt("Напишите математическое выражение", "1+2");
//         let result = eval(str);
//         if (isNaN(result)) {
//             throw new Error("Ошибка! NaN");
//         };
//         alert(result);
//     }
//     calculator();
// } catch(e) {
//     alert("Вы ввели неверное выражение. Попробуйте ещё раз.");
//     calculator();
//     // alert(e.name);
//     // alert(e.message);
// } 

let expr, res;

while (true) {
    expr = prompt("Напишите математическое выражение", "1+2");
    if (expr === null) break;

    try {
        res = eval(expr);
        if (isNaN(res)) {
            throw new Error("Результат неопределен");
        }
        break;
    } catch (e) {
        alert("Ошибка: " + e.message + ". Попробуйте ввести выражение ещё раз.")
    };

};

alert(res);


