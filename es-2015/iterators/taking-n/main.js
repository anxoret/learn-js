"use strict";

function integers() {    

};

integers[Symbol.iterator] = function(n) {
    
    let current = 0;
    let last = n || current++;

    return {
        
        next() {

            if (current <= last) {
                return {
                    done: false,
                    value: current++
                };
            } else {
                return {
                    done: true
                }
            }

        }

    };


};

function take() {

};

take[Symbol.iterator] = function(n) {
    return integers[Symbol.iterator]();
}

for (let num of take) {
    alert(num);
};