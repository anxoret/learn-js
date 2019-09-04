function checkForSmiles(str) {

    let smiles = 0;

    str = str.split("");

    if (str.length > 100000) {
        throw new Error("Слишком длинная строка.");
    }

    let simbolsForChecking = [];

    for (let i = 0; i < str.length; i++) {

        if ( (str[i] === ":") || (str[i] === ";") ) {
            simbolsForChecking.push(i);
        } 

    }


    for (let i = 0; i < simbolsForChecking.length; i++) {
        
        let charForCheck = simbolsForChecking[i] + 1;

        if ( str[charForCheck] === "("
            ||  str[charForCheck] === ")"
            ||  str[charForCheck] === "["
            ||  str[charForCheck] === "]"  
        ) {
            smiles++;
        } else if (str[charForCheck] === "-" ) {

            while(str[charForCheck === "-" ]) {
                charForCheck++;
            }

            if ( str[charForCheck + 1] === "-" 
            ||  str[charForCheck + 1] === "("
            ||  str[charForCheck + 1] === ")"
            ||  str[charForCheck + 1] === "["
            ||  str[charForCheck + 1] === "]"
            ) {
                smiles++;
            }

        }

    }

    return smiles;

};

function countSmiles (str) {

    let countOfSmiles = 0;

    if ( ( str.indexOf(":") === -1 ) && ( str.indexOf(";") === -1 ) ) {
        alert("Смайлов не найдено.")
    } else {
        countOfSmiles = checkForSmiles(str);
    }

    console.log(countOfSmiles);
     
    return countOfSmiles;

};



countSmiles("It's Tinkoff :)");



