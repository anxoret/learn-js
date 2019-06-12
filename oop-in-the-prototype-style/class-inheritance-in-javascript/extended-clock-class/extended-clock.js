(function() {

    function ExtendedClock(options) {
        Clock.apply(this, arguments);
        this._precision = options.precision;
    };

    ExtendedClock.prototype = Object.create(Clock.prototype);
    ExtendedClock.prototype.constructor = ExtendedClock;

    ExtendedClock.prototype.start = function () {
        this._render();
        let self = this;
        // let currentPrecision = this._precision;

        // if (currentPrecision === undefined) {
        //     currentPrecision = 1000;
        // }

        // this._timer = setInterval(function() {
        //     self._render()
        // }, currentPrecision);

        this._timer = setInterval(function () {
            self._render();
        }, (+this._precision || 1000));

    };

}());






