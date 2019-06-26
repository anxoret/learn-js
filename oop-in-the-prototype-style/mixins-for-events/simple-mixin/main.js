function extend(target) {
    if (!arguments[1]) {
        return;
    }

    for (let i = 1; i < arguments.length; i++) {
        let source = arguments[i];
        
        for (let key in source) {
            if (!target[key] && source.hasOwnProperty(key)) {
                target[key] = source[key];
            }
        }

    }

};

function Track(name) {
    this.name = name;
};

function PlayList(name) {
    this.name = name;
};

let musicMixin = {
    getName: function() {
        return this.name;
    },

    play: function() {
        console.log(this.name + " играет");
    }
};

extend(Track.prototype, musicMixin); //можно также написать несколько 
// миксинов через запятую

extend(PlayList.prototype, musicMixin);

let track = new Track("Super Track");

let playList = new PlayList("Cool Playlist");

console.log(track.getName());
console.log(playList.play());