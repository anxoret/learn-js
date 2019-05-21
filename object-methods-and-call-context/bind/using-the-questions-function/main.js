"use strict";

// решение через bind

// function ask(question, answer, ok, fail) {
//   var result = prompt(question, '');
//   if (result.toLowerCase() == answer.toLowerCase()) ok();
//   else fail();
// }

// var user = {
//   login: 'Василий',
//   password: '12345',

//   loginOk: function() {
//     alert( this.login + ' вошёл в сайт' );
//   },

//   loginFail: function() {
//     alert( this.login + ': ошибка входа' );
//   },

//   checkPassword: function() {
//     ask("Ваш пароль?", this.password, this.loginOk.bind(this), this.loginFail.bind(this));
//   }
// };

// user.checkPassword();

// var vasya = user;
// user = null;
// vasya.checkPassword();

// решение через замыкание

function ask(question, answer, ok, fail) {
    var result = prompt(question, '');
    if (result.toLowerCase() == answer.toLowerCase()) ok();
    else fail();
  }
  
  var user = {
    login: 'Василий',
    password: '12345',
  
    loginOk: function() {
      alert( this.login + ' вошёл в сайт' );
    },
  
    loginFail: function() {
      alert( this.login + ': ошибка входа' );
    },
  
    checkPassword: function() {
        let self = this;
        ask("Ваш пароль?", self.password, 
            function() {
                self.loginOk();
            }, 
            function() {
                self.loginFail();
            }
        );
    }

  };

  user.checkPassword();
  
  var vasya = user;
  user = null;
  vasya.checkPassword();