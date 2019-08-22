"use strict";

class Menu {
    constructor(state) {
        this._state = state || this.STATE_CLOSED;

        this.STATE_CLOSED = 0;
        this.STATE_CLOSED = 1;
    };

    close() {
        this._state = this.STATE_CLOSED;
    };

    open() {
        this._state = this.STATE_OPEN;
    };

    _stateAsAString() {
        switch (this._state) {

            case this.STATE_CLOSED:
                return "меню закрыто";
    
            case this.STATE_OPEN:
                return "меню открыто";
    
        };
    };

    showState() {
        alert( this._stateAsAString() );
    };

};

// проверка, что объект Menu корректно создается:

// let menu = new Menu();
// menu.open();
// menu.showState();
// menu.close();
// menu.showState();

