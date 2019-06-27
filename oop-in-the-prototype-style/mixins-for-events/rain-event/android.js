function Android() {
    this._state = {
        umbrellaIsOpen: false,
        bootsAreOn: false
    };
};

Android.prototype.putOnBoots = function() {
    this._state.bootsAreOn = true;
};

Android.prototype.takeOffBoots = function() {
    this._state.bootsAreOn = false;
};

Android.prototype.openUmbrella = function() {
    this._state.umbrellaIsOpen = true;
};

Android.prototype.closeUmbrella = function() {
    this._state.umbrellaIsOpen = false;
};

let android = new Android();

