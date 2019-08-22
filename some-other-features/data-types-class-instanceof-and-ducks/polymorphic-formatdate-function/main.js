function formatDate(date) {

    let formattedDate;

    formatDate.getFormattedDateFromObjDate = function(a) {
    
        formattedDate = new Date(a);
    
        let dateArr = [];
    
        dateArr.push(formattedDate.getDate() + "");
        dateArr.push(formattedDate.getMonth() + 1 + "");
        dateArr.push(formattedDate.getFullYear() + "");
    
        for (let i = 0; i < dateArr.length; i++) {
                if (dateArr[i].length < 2) {
                    dateArr[i] = "0" + dateArr[i];
                } else if (dateArr[2]) {
                dateArr[2] = dateArr[2].slice(-2);
                };
        };
    
        formattedDate = dateArr.slice().join(".");
    
        return formattedDate;
    
    };

    formatDate.getFormattedDateFromStr = function(a) {
        let str = a.slice();
        formattedDate = str.slice(-2) + "."+ str.slice(5, 7) + "." + str.slice(2, 4);
        return formattedDate;
    };

    if ({}.toString.call(date) === "[object Date]") {
        formatDate.getFormattedDateFromObjDate(date);

    } else if (typeof date === "string") {
        let dateArr = new Date(date);
        formatDate.getFormattedDateFromObjDate(dateArr);
        // либо через строку: formatDate.getFormattedDateFromStr(date);


    } else if (typeof date === "number") {
        let a = new Date(date * 1000);
        formatDate.getFormattedDateFromObjDate(a);

    } else if (Array.isArray(date)) {

        let dateArr = date.slice();

        for (let i = 0; i < dateArr.length; i++) {
            
            dateArr[i] = dateArr[i] + "";

            if (dateArr[i].length < 2) {
                dateArr[i] = "0" + dateArr[i];
            } else if (dateArr[1] == 00) {
                dateArr[1] = "01";
            }

        };
        
        dateArr = dateArr.join("-");

        formatDate.getFormattedDateFromStr(dateArr);

    };

    return formattedDate;
};

alert( formatDate(new Date(2014, 0, 1)) ); // 01.01.14
alert( formatDate('2011-10-02') ); // 02.10.11
alert( formatDate(1234567890) ); // 14.02.09
alert( formatDate( [2014, 0, 1]) ); // 01.01.14

