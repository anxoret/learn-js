let leader = {
    name: "Василий Иванович",
    age: 35
};

leader = JSON.stringify(leader, null, 4);

leader = JSON.parse(leader);

alert(leader);

