'use strict';

let urls = [
  'user.json',
  'guest.json'
];

// начало цепочки
let chain = Promise.resolve();

let results = [];

// в цикле добавляем задачи в цепочку
urls.forEach(function(url) {
chain = chain
    .then(() => httpGet(url))
    .then((result) => {
    results.push(result);
    });
});

// в конце — выводим результаты
chain.then(() => {
alert(results);
});


function sequentiallyLoadArr(arr) {

    // let results = [];

    // for (let i = 0; i < arr.length; i++) {

    //     let promise = fetch(arr[i])
    //         .then(function(response) {
    //             return response.text();
    //         })
    //         .then(function(text) {
    //             results.push(text);
    //         });
            
        
    //     promise.catch( (err) => results.push(err.value) );

    // }

    // return results;

};

// console.log(sequentiallyLoadArr(urls));

