function checkLengthOfString(string) {
    if (string.length == 1) {
        string = "0" + string;
    }

    return string;
};


function makeObjectWithCurrentTime() {
    let currentTime = new Date();
    
    currentTime.hours = checkLengthOfString(currentTime.getHours() + "");
    currentTime.minutes = checkLengthOfString(currentTime.getMinutes() + "");
    currentTime.seconds = checkLengthOfString(currentTime.getSeconds() + "");

    return currentTime;
};

function createClock() {
    // let container = document.createElement("div");
    // document.body.append(container);

    let currentTime = makeObjectWithCurrentTime();

    // let spanHours = document.createElement("span");
    // spanHours.className = "hours";
    let spanHours = document.querySelector(".hours");
    spanHours.innerText = currentTime.hours + ":";
    // container.append(spanHours);

    // let spanMinutes = document.createElement("span");
    // spanMinutes.className = "minutes";
    let spanMinutes = document.querySelector(".minutes");
    spanMinutes.innerText = currentTime.minutes + ":";
    // container.append(spanMinutes);

    // let spanSeconds = document.createElement("span");
    // spanSeconds.className = "seconds";
    let spanSeconds = document.querySelector(".seconds");
    spanSeconds.innerText = currentTime.seconds + "";
    // container.append(spanSeconds);
};

createClock();

let timerId;

function clockStart() {
    timerId = setInterval(createClock, 1000);
    createClock();
};

function clockStop() {
    clearInterval(timerId);
    timerId = null;
};


