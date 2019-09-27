function checkPairForUniquenessInArray(array, pairToCheck) {

    let uniqueness = true;

    array.forEach(pairOfArray => {
        if ( (pairOfArray[0] == pairToCheck[0]) && (pairOfArray[1] == pairToCheck[1]) ) {
            uniqueness = false;
        }
    });

    return uniqueness;

};

function searchPairs(array, N) {

    let arrayOfPairs = [];

    for (let currentElement = 0; currentElement < array.length; currentElement++) {

        for (let nextElement = currentElement + 1; nextElement < array.length; nextElement++) {
            if ( (array[currentElement] + array[nextElement] == N) 
                    && checkPairForUniquenessInArray(arrayOfPairs, [array[currentElement], array[nextElement]]) 
                ) {
                        
                arrayOfPairs.push([array[currentElement], array[nextElement]]);
            } 
        }

    }

    return arrayOfPairs;

};

const arr = [1, 2, 6, 5, 3, 4, 7, 8];
const k = 5;

console.log(searchPairs(arr, k));

// //OUT: >> [[1, 4], [2, 3]]
