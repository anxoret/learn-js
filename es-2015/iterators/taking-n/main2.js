function integers() {

    let i = 0;

    return {

        next() {
            return { value: i++ };
        },

        [Symbol.iterator]() { 
            return this;
        }

    };

};

function take(n, iter) {

    return {

        next() {

            let result = iter.value;

            if (result <= n) {
                return {done: false, value: result};
            } else {
                return {done: true, value: result};
            }
            
        },

        [Symbol.iterator]() {
            return this;
        }

    };

};

let iter = integers();

for (let elt of take(3, iter) )  {
    console.log(elt);
}; // 0, 1, 2, 3