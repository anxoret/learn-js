// Раздел: Методы объектов и контекст вызова
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


