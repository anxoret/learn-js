function formatDate(date) {

    let nowDate = new Date();

    let comparedDate = new Date(date);

    let diff = Math.floor( (nowDate - comparedDate) / 1000 ); // разница в секундах

    if (diff < 1) { // diff меньше 1 секунды
        return "только что";
    } else if (diff < 60) { // diff меньше 1 минуты
        let str = diff + " сек. назад";
        return str;
    } else if (diff < 3600) { // diff меньше 1 часа
        let str = diff/60 + " мин. назад";
        return str;
    } else {
        let updatedDate = ddmmyyFormat(date);
        let timeOfUpdatedDate = date.getHours() + ":" + date.getMinutes();
        return updatedDate + " " + timeOfUpdatedDate;
    };
    
};

function ddmmyyFormat(date) {

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    day = dateElementsDecorator(day);
    month = dateElementsDecorator(month);
    year = dateElementsDecorator(year);

    let formattedDate = day + "." + month + "." + year;

    return formattedDate;
 
};

function dateElementsDecorator(element) {
    
    element = element + "";

    if (element.length < 2) {
        element = "0" + element;
    } else if (element.length > 3) {
        element = element.slice(-2);
    };

    return element;

};

alert( formatDate(new Date(new Date - 1)) ); // "только что"
alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"
alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"
alert( formatDate(new Date(new Date - 86400 * 1000)) ); // вчерашняя дата в формате "дд.мм.гг чч:мм"