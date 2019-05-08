function getSecondsToTomorrow() {

    let now = new Date();

    let tomorrow = new Date(now);
    tomorrow.setDate(now.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    // либо так:
    // let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
    // - т.е. создать объект из завтрашней даты, без часов-минут-секунд

    return alert((tomorrow - now) / 1000);

};

getSecondsToTomorrow();