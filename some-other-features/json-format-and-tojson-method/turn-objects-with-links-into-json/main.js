// УСЛОВИЯ ЗАДАНИЯ

// let leader = {
//     name: "Василий Иванович",
// };

// let soldier = {
//     name: "Петька",
// };

// эти объекты ссылаются друг на друга!
// leader.soldier = soldier;
// soldier.leader = leader;

// ПРАВИЛЬНЫЕ РЕШЕНИЯ ЗАДАЧИ: ЭТО ЛИБО ИСПОЛЬЗОВАНИЕ ФРЕЙМВОРКА Dojo И ЕГО использование 
// особой реализации JSON, которая не входит в стандарт и 
// поддерживает расширенный формат для поддержки ссылок
// (А ИМЕННО ВЫЗОВ dojox.json.ref.toJson(team)), ЛИБО ЧТО 
// ЕСТЬ ЛУЧШЕЕ РЕШЕНИЕ (!) использовать вместо ссылок id и 
// измененная с помощью id структура будет выглядеть так:

let leader = {
    id: 12,
    name: "Василий Иванович"
};

let soldier = {
    id: 51,
    name: "Петька"
};

// поменяли прямую ссылку на ID
leader.soldierId = 51;
soldier.leaderId = 12;

let team = {
    12: leader,
    51: soldier
};

// а затем нужно сделать некую функцию, находящую по id объект

// А ВСЕ РЕШЕНИЯ НИЖЕ - ЭТО НЕВЕРНЫЕ РЕШЕНИЯ! 

// // итак, переходим на новый формат данных. начинаем хранить не
// // ссылки на объекты, а их ключи в виде строк (такое спокойно реализуется)
// // вместо leader.soldier = soldier;
// leader.soldier = "soldier";
// // вместо soldier.leader = leader;
// soldier.leader = "leader";

// let team = [leader, soldier];

// // for (let i = 0; i < team.length; i++) {

// //     if ({}.toString.call(team[i]) === "[object Object]") {

// //         for (let key in team[i]) {
// //             team[i][key] = team[i][key] + "";
// //             // alert(typeof team[i][key]);

// //         };

// //     } 

// // };

// let result =  JSON.stringify(team);
// //result = JSON.parse(result);

// alert(result);