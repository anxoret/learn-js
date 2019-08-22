'use strict';

let urls = [
  'user.json',
  'guest.json'
];

// let results = urls.map(function(httpGet) {
//     new Promise((resolve, reject) => {
//         return httpGet;
//     }) 

// });

// alert(results);

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

