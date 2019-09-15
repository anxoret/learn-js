function createCalendar(elem, year, month) {

    let containerForCalendar = elem;
    let numberOfDaysInMoth = (new Date(year, month, 0)).getDate();
    let weekNumberOfFirstDayOfMonth = (new Date(year, month - 1, 1)).getDay(); 

    if (weekNumberOfFirstDayOfMonth == 0) {
        weekNumberOfFirstDayOfMonth = 7;
    }

    alert(numberOfDaysInMoth);

    let table = document.createElement("table");
    containerForCalendar.append(table);
    table.width = "230px";
    table.style.borderCollapse = "collapse";
    table.style.border = "1px solid black";

    // создание заголовков у столбцов таблицы
    let thead = document.createElement("thead");
    table.append(thead);

    let theadTR = document.createElement("tr");
    thead.append(theadTR);

    for (let numberOfTH = 1; numberOfTH < 8; numberOfTH++) {
        let th = document.createElement("th");
        th.style.padding = "5px";
        th.style.border = "1px solid black";
        th.style.backgroundColor = "#E0E0E0";
        
        switch (numberOfTH) {

            case 1:
                th.innerText = "пн";
                break;
            
            case 2:
                th.innerText = "вт";
                break;
            
            case 3:
                th.innerText = "ср";
                break;
            
            case 4:
                th.innerText = "чт";
                break;

            case 5:
                th.innerText = "пт";
                break;

            case 6:
                th.innerText = "сб";
                break;
            
            case 7:
                th.innerText = "вс";
                break;

            default:
                break;
        }

        theadTR.append(th);
    }
    
    // создание тела таблицы
    let tbody = document.createElement("tbody");
    table.append(tbody);

    for (let numberOfTR = 0; numberOfTR < 6; numberOfTR++) {
        let tbodyTR = document.createElement("tr");
        tbody.append(tbodyTR);

        let numberOfTD = 7;

        while (numberOfTD > 0) {
            let tbodyTD = document.createElement("td");
            tbodyTD.style.textAlign = "center";
            tbodyTD.style.padding = "5px";
            tbodyTD.style.border = "1px solid black";
            tbodyTR.append(tbodyTD);
            numberOfTD--;
        }

    }

    // наполнение тела таблицы номерами дней месяца
    let arrayOfAllTableDays = document.getElementsByTagName("td"); // 35 дней

    let countOfMonthDays = 1;
    let count = 0;

    for (let numberOfMonthDay of arrayOfAllTableDays) {

        if (count > numberOfDaysInMoth) break;
        
        if (countOfMonthDays == weekNumberOfFirstDayOfMonth) {
            numberOfMonthDay.innerText = count++ + "";
        } 

        if (count) {
            numberOfMonthDay.innerText = count++ + "";
        }

        countOfMonthDays++;
        
    }

};

let cal = document.createElement("div");
cal.className = "container";
document.body.append(cal);

// createCalendar(cal, 2012, 9);
createCalendar(cal, 2012, 9);