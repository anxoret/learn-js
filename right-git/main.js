// Раздел: Методы объектов и контекст вызова
// задание: Сумма произвольного количества скобок

// метод решения через замыкание
// function sum(a) {
    
//     let currentSum = a;

//     function f(b) {
//         currentSum += b;
//         return f;
//     }

//     f.valueOf = function() {
//         return currentSum;
//     }

//     return f;

// };

// метод решения без замыкания
// function sum(a) {
//     if (sum.foo === undefined) {
//         sum.foo = 0;
//     };

//     sum.foo += a;
    
//     return sum;
// };

// sum.toString = function() {
//     let a = this.foo;
//     this.foo = undefined;
//     return a;
// };

// alert ( sum(1)(2) == 3  ); // 1 + 2
// alert ( sum(1)(2)(3) == 6 ); // 1 + 2 + 3
// sum(5)(-1)(2) == 6
// alert(sum(6)(-1)(-2)(-3)); // == 0
// sum(0)(1)(2)(3)(4)(5) == 15

// Раздел: Дата и время
// задание: Создайте дату

// let febrary20 = new Date(2012, 1, 20, 3, 12);
// alert(febrary20); 

// задание: Имя дня недели

// функция, выводящая текущий день недели в коротком формате „пн“, „вт“, … „вс“

// решение с помощью switch
// function getWeekDay(date) {

//     let nameOfDay; 

//     switch(date.getDay(date)) {
//         case 0: 
//             nameOfDay = "вс";
//             break;
//         case 1:
//             nameOfDay = "пн";
//             break;
//         case 2:
//             nameOfDay = "вт";
//             break;
//         case 3:
//             nameOfDay = "ср";
//             break;
//         case 4: 
//             nameOfDay = "чт";
//             break;
//         case 5:
//             nameOfDay = "пт";
//             break;
//         case 6:
//             nameOfDay = "сб";
//             break;

//     };

//     return nameOfDay;

// };

// let date = new Date(2012,0,3);  // 3 января 2012
// alert( getWeekDay(date) ); // 'вт'

// решение с помощью массива

// function getWeekDay(date) {
//     let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
  
//     return days[date.getDay()];
// }

// let date = new Date(2014, 0, 3); // 3 января 2014
// alert( getWeekDay(date) ); // 'пт'

// решение с помощью toLocaleString

// let date = new Date(2014, 0, 3); // 3 января 2014
// alert( date.toLocaleString('ru', {weekday: 'short'}) ); // 'Пт'


