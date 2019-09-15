let clientsAndTheirTimeOfComing = {};

let ClientsOfWindowOne = [];
let ClientsOfWindowTwo = [];
let ClientsOfWindowThree = [];
let queueOfClients = [];

let timesOfTheEndOfServing = []

function getUniqueClientNumber(min, max) {
  let randomNumber = min + Math.random() * (max + 1 - min);
  return Math.floor(randomNumber);
};

function determineEndTimeOfService(clientNumber) {

    let date = new Date();
    date.setHours(clientsAndTheirTimeOfComing[clientNumber].hours);
    date.setMinutes(clientsAndTheirTimeOfComing[clientNumber].minutes);
    
    let dateAfterService = new Date(date);
    dateAfterService.setMinutes(date.getMinutes() + 30);

    // alert(`Время ухода клиента:\n ${dateAfterService.getHours()}:${dateAfterService.getMinutes()}`);

    let endOfServingThisClient = [];
    endOfServingThisClient.push( dateAfterService.getHours() );
    endOfServingThisClient.push( dateAfterService.getMinutes() );

    timesOfTheEndOfServing.push(endOfServingThisClient);

};

function addClientsFromQueueToFreeWindows(direction) {
    
    if (queueOfClients.length) {
        direction.push(queueOfClients[0]);
    }

};

function deleteClientFromTheWindow(direction, clientNumber) {

    if (direction == queueOfClients) return;

    // alert(`Клиент ${clientNumber} попал в очередь ${direction} ! Запускаем таймер!`);
    setTimeout(() => {
        for (let i = 0; i < direction.length; i++) {
            if (direction[i] == clientNumber) {
                direction.splice(i, i);
            }
        }

        // alert(`Клиент ${clientNumber} покинул очередь ${ClientsOfWindowOne} !`);

        addClientsFromQueueToFreeWindows(direction);
    }, 3000);
};

function directClientToTheWindow(clientNumber) {
    if (!ClientsOfWindowOne.length) {
        ClientsOfWindowOne.push(clientsAndTheirTimeOfComing[clientNumber]);
        return ClientsOfWindowOne;
        
    } else if (!ClientsOfWindowTwo.length) {
        ClientsOfWindowTwo.push(clientsAndTheirTimeOfComing[clientNumber]);
        return ClientsOfWindowTwo;

    } else if (!ClientsOfWindowThree.length) {
        ClientsOfWindowThree.push(clientsAndTheirTimeOfComing[clientNumber]);
        return ClientsOfWindowThree;

    } else {
        queueOfClients.push(clientsAndTheirTimeOfComing[clientNumber]);
        return queueOfClients;
    }
   
};

function countAllClients(newClients) {
    let allClientsNumber = ClientsOfWindowOne.length 
        + ClientsOfWindowTwo.length
        + ClientsOfWindowThree.length
        + queueOfClients.length
        + newClients;

    return allClientsNumber;

};

function compareClientsByMinutesOfComming(a, b) {
    if (a[2] > b[2]) return 1;
    if (a[2] == b[2]) return 0;
    if (a[2] < b[2]) return -1;
};

function cleanArrayAfterSortingByTime(array) {
    array.forEach(element => {
        element.splice(2, 1);
    });
};

function sortClientsByTime(timeofClientsComming) {

    timeofClientsComming.forEach(timeOfComming => {
        let timeOfCommingInMinutes = timeOfComming[0] * 60 + timeOfComming[1];
        timeOfComming[2] = timeOfCommingInMinutes;
    });

    timeofClientsComming.sort(compareClientsByMinutesOfComming);

    cleanArrayAfterSortingByTime(array);

    return timeofClientsComming;

};

function servingTimeForClients(numberOfClients, ...timeofClientsComming) {

    if (numberOfClients !== timeofClientsComming.length) {
        throw new Error("Некорректная передача параметров в функцию.");
    }

    if ( countAllClients(numberOfClients) >= 100) {
        throw new Error("Количество всех клиентов не может превышать 100");
    }

    sortClientsByTime(timeofClientsComming);

    for (let i = 0; i < numberOfClients; i++) {

        let uniqueClientNumber = getUniqueClientNumber(1, 100) + "";

        let timeOfComming = timeofClientsComming[i];
        
        clientsAndTheirTimeOfComing[uniqueClientNumber] = {
            "hours": `${timeOfComming[0]}`,
            "minutes": `${timeOfComming[1]}`
        };

        deleteClientFromTheWindow( directClientToTheWindow(uniqueClientNumber), uniqueClientNumber );
        determineEndTimeOfService(uniqueClientNumber);

    }

    return timesOfTheEndOfServing;

};

// alert( servingTimeForClients(5, [22, 35], [23, 5], [23, 6], [23, 7], [23, 8] ) );

// let result = servingTimeForClients(5, [22, 35], [23, 5], [23, 6], [23, 7], [23, 35] );
let result = servingTimeForClients(5, [21, 35], [20, 5], [21, 4], [23, 35], [23, 7] );

// servingTimeForClients(100, [22, 35], [23, 5], [23, 6], [23, 7], [23, 35], [22, 35], [23, 5], [23, 6], [23, 7], [23, 35],
//                         [22, 35], [23, 5], [23, 6], [23, 7], [23, 35], [22, 35], [23, 5], [23, 6], [23, 7], [23, 35],
//                         [22, 35], [23, 5], [23, 6], [23, 7], [23, 35], [22, 35], [23, 5], [23, 6], [23, 7], [23, 35],
//                         [22, 35], [23, 5], [23, 6], [23, 7], [23, 35], [22, 35], [23, 5], [23, 6], [23, 7], [23, 35],
//                         [22, 35], [23, 5], [23, 6], [23, 7], [23, 35], [22, 35], [23, 5], [23, 6], [23, 7], [23, 35],
//                         [22, 35], [23, 5], [23, 6], [23, 7], [23, 35], [22, 35], [23, 5], [23, 6], [23, 7], [23, 35],
//                         [22, 35], [23, 5], [23, 6], [23, 7], [23, 35], [22, 35], [23, 5], [23, 6], [23, 7], [23, 35],
//                         [22, 35], [23, 5], [23, 6], [23, 7], [23, 35], [22, 35], [23, 5], [23, 6], [23, 7], [23, 35],
//                         [22, 35], [23, 5], [23, 6], [23, 7], [23, 35], [22, 35], [23, 5], [23, 6], [23, 7], [23, 35],
//                         [22, 35], [23, 5], [23, 6], [23, 7], [23, 35], [22, 35], [23, 5], [23, 6], [23, 7], [23, 35],


// );

// result.forEach(alert);


// 23,5 | 23,35 | 23,36 | 23,35 | 00,3 

// servingTimeForClients(2, [22, 35], [23, 5]);
// servingTimeForClients(1, [22, 35]);







