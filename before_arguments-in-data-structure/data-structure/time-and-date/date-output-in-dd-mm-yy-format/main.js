// первый способ, самый очевидный для меня

function formatDate(date) {

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


// второй способ, который Канторовский

// function formatDate(date) {

//     let dd = date.getDate();
//     if (dd < 10) dd = '0' + dd;
  
//     let mm = date.getMonth() + 1;
//     if (mm < 10) mm = '0' + mm;
  
//     let yy = date.getFullYear() % 100;
//     if (yy < 10) yy = '0' + yy;
  
//     return dd + '.' + mm + '.' + yy;

// };


let d = new Date(2014, 0, 30); // 30 января 2014
alert( formatDate(d) ); // '30.01.14'