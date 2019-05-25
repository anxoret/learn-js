let leader = {
    name: "Василий Иванович",
    // soldier: soldier
};

let soldier = {
    name: "Петька",
    // leader: leader
};

// эти объекты ссылаются друг на друга!
// leader.soldier = soldier;
// soldier.leader = leader;

// итак, переходим на новый формат данных. начинаем хранить не
// ссылки на объекты, а их ключи в виде строк (такое спокойно реализуется)
// вместо leader.soldier = soldier;
leader.soldier = "soldier";
// вместо soldier.leader = leader;
soldier.leader = "leader";

let team = [leader, soldier];

// for (let i = 0; i < team.length; i++) {

//     if ({}.toString.call(team[i]) === "[object Object]") {

//         for (let key in team[i]) {
//             team[i][key] = team[i][key] + "";
//             // alert(typeof team[i][key]);

//         };

//     } 

// };

let result =  JSON.stringify(team);
result = JSON.parse(result);

alert(result[0]["soldier"]);