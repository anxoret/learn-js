
for (let i = 0; i < 10000; i++) {
    document.write( "<span> ... </span>");
}

function bench(func, times) {

    let d = new Date();
    for(let i = 0; i < times; i++) func();
    let difference = new Date() - d;

    alert("Время исполнения: " + difference);

};

function elementsByTagNameMethod() {
    let result = document.getElementsByTagName("span");

    for (let i = 0; i < result.length; i++) {
        let elem = result[i];
    }
};

function querySelectorAllMethod() {
    let result = document.querySelectorAll("span");

    for (let i = 0; i < result.length; i++) {
        let elem = result[i];
    }
}

bench(elementsByTagNameMethod, 10000);
bench(querySelectorAllMethod, 10000);

// возможный (?) вариант решения задачи без функций:

// for (let i = 0; i < 60000; i++) {
//     document.write( "<span> ... </span>");
// }

// let d1 = new Date();
// let elementsByTagNameMethod = document.getElementsByTagName("span");
// let difference1 = new Date() - d1;

// let d2 = new Date();
// let querySelectorAllMethod = document.querySelectorAll("span");
// let difference2 = new Date() - d2;

// alert("getElementsByTagName: " + difference1 + "\n querySelectorAll: " + difference2);
