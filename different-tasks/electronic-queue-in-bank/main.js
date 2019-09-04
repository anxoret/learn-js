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

    alert(`Время ухода клиента:\n ${dateAfterService.getHours()}:${dateAfterService.getMinutes()}`);

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

function servingTimeForClients(numberOfClients, ...timeofClientsComming) {

    if (numberOfClients.length > 100) {
        throw new Error("Количество клиентов не может превышать 100");
    }

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

alert( servingTimeForClients(2, [22, 35], [23, 5]) );

// servingTimeForClients(2, [22, 35], [23, 5]);
// servingTimeForClients(1, [22, 35]);





