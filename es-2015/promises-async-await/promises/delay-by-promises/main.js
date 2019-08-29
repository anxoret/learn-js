function delay(ms) {
    
    let promise = new Promise(function(resolve, reject){

        let now = new Date();

        while ( (new Date() - now) !== ms) {
            
        };

        resolve();

    });

    return promise;

};

delay(3000).then(() => alert('выполнилось через 3 секунды'));