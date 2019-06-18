function AnimatingMenu() {
    Menu.apply(this, arguments);
};

AnimatingMenu.prototype = Object.create(Menu.prototype);
AnimatingMenu.prototype.constructor = AnimatingMenu;

AnimatingMenu.prototype.STATE_ANIMATING = 2;

AnimatingMenu.prototype.open = function() {
    this._state = this.STATE_ANIMATING;

    let savedThis = this;
    let savedArgs = arguments;

    this.timerId = setTimeout(function() {
        Menu.prototype.open.apply(savedThis, savedArgs);
    }, 1000);
};

AnimatingMenu.prototype.close = function() {
    if (this.timerId) {
        clearTimeout(this.timerId);
    }

    let savedThis = this;
    let savedArgs = arguments;

    Menu.prototype.close.apply(savedThis, savedArgs);
};

AnimatingMenu.prototype._stateAsAString = function() {

    let savedThis = this;
    let savedArgs = arguments;

    switch (this._state) {

        case this.STATE_ANIMATING:
            return "меню в режиме анимации";

        default:
            return Menu.prototype._stateAsAString.apply(savedThis, savedArgs);

    };
};


