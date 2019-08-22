function Menu(state) {
    this._state = state || this._States.closed;
};

Menu.prototype._States = {
    closed: 0,
    open: 1,
};

Menu.prototype.close = function() {
    this._state = this._States.closed;
};

Menu.prototype.open = function() {
    this._state = this._States.open;
};

Menu.prototype._stateAsAString = function() {
    switch (this._state) {

        case this._States.closed:
            return "меню закрыто";

        case this._States.open:
            return "меню открыто";

    };
};

Menu.prototype.showState = function() {
    alert( this._stateAsAString() );
};
