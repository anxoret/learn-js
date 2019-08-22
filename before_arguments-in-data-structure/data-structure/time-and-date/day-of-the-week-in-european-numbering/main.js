function getLocalDay(date) {

    let day = date.getDay();
  
    if (day == 0) { // день 0 становится 7
      day = 7;
    }
  
    return day;
  }
  
  alert( getLocalDay(new Date(2012, 0, 3)) ); // 2