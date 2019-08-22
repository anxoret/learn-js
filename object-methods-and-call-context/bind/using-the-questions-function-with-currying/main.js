"use strict";

// решение с помощью замыкания

// function ask(question, answer, ok, fail) {
//   var result = prompt(question, '');
//   if (result.toLowerCase() == answer.toLowerCase()) ok();
//   else fail();
// }

// var user = {
//   login: 'Василий',
//   password: '12345',

//   // метод для вызова из ask
//   loginDone: function(result) {
//     alert( this.login + (result ? ' вошёл в сайт' : ' ошибка входа') );
//   },

//   checkPassword: function() {

//     var self = this;

//     ask("Ваш пароль?", self.password,
//       function() {
//         self.loginDone(true);
//       },
//       function() {
//         self.loginDone(false);
//       }
//     );
//   }
// };

// var vasya = user;
// user = null;
// vasya.checkPassword();

// решение с помощью bind

function ask(question, answer, ok, fail) {
    var result = prompt(question, '');
    if (result.toLowerCase() == answer.toLowerCase()) ok();
    else fail();
  }
  
  var user = {
    
    login: 'Василий',
    password: '12345',
  
    // метод для вызова из ask
    loginDone: function(result) {
      alert( this.login + (result ? ' вошёл в сайт' : ' ошибка входа') );
    },
  
    checkPassword: function() {
      ask("Ваш пароль?", this.password, this.loginDone.bind(this, true), this.loginDone.bind(this, false));
    }
    
  };
  
  var vasya = user;
  user = null;
  vasya.checkPassword();