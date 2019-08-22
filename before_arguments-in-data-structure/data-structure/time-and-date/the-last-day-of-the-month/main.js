// короткий и лучший вариант решения

function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0); // создаем дату из следующего месяца, но день не первый, а «нулевой» (т.е. предыдущий)
    return date.getDate(); 
};

// длинный вариант решения

// function getLastDayOfMonth(year, month) {

//     let date = new Date(year, month);

//     let changingData = new Date(year, month);

//     let correctMonth = date.getMonth();

//     let day;

//     for (day = 1; day < 31; day++) {

//         changingData.setDate(day);
        
//         let currentMonth = changingData.getMonth();

//         if (currentMonth !== correctMonth) {
//             day--;
//             break;
//         }

//     }

//     return day;

// };

alert( getLastDayOfMonth(2012, 0) ); // 31
alert( getLastDayOfMonth(2012, 1) ); // 29
alert( getLastDayOfMonth(2013, 1) ); // 28