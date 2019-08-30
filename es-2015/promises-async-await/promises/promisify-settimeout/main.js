function delay(ms) {

    return new Promise(function(resolve, reject) {
        
        setTimeout(resolve, ms);
        // или долгий вариант:
        // setTimeout( () => {
        //     resolve();
        // }, ms);

    });

};

delay(1000)
  .then(() => alert("Hello!"));

