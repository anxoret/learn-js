"use strict";

class AnimatingMenu extends Menu {

    constructor(state) {
        super(state);
        this.STATE_ANIMATING = 2;
    };

    open() {
        this._state = this.STATE_ANIMATING;

        // let savedThis = this;
        // let savedArgs = arguments;

        // this.timerId = setTimeout(function() {
        //     Menu.prototype.open.apply(savedThis, savedArgs);
        // }, 1000);

        this.timerId = setTimeout( () => super.open() );

    };

    close() {
        if (this.timerId) {
            clearTimeout(this.timerId);
        }
    
        // let savedThis = this;
        // let savedArgs = arguments;
    
        // Menu.prototype.close.apply(savedThis, savedArgs);

        super.close();

    };

    _stateAsAString() {
        
        // let savedThis = this;
        // let savedArgs = arguments;

        switch (this._state) {

            case this.STATE_ANIMATING:
                return "меню в режиме анимации";

            default:
                //return Menu.prototype._stateAsAString.apply(savedThis, savedArgs);
                return super._stateAsAString();

        };

    };

};