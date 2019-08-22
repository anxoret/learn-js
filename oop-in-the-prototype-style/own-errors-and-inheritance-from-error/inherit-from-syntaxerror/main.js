function FormatError(message) {
    this.name = "FormatError";

    this.message = "Ошибка вида: " + message;

    if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor);
      } else {
        this.stack = (new Error()).stack;
    };

};

FormatError.prototype = Object.create(SyntaxError.prototype);
FormatError.prototype.constructor = FormatError;

let err = new FormatError("ошибка форматирования");

alert( err.message ); // ошибка форматирования
alert( err.name ); // FormatError
alert( err.stack ); // стек на момент генерации ошибки

alert( err instanceof SyntaxError ); // true