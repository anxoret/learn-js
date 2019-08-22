function foobar(arr) {

    for (let i = 0; i < arr.length; i++) {

    if ( ( (arr[i] % 3) == 0) && ( (arr[i] % 5) == 0) ) {
        arr[i] = "Foobar";
    } else if ( (arr[i] % 3) == 0) {
            arr[i] = "Foo";
        } else if ( (arr[i] % 5) == 0) {
            arr[i] = "Bar";
        } 

    }

    return arr;

}

let arr = [];

for (let i = 1; i < 101; i++) {
    arr.push(i);
};

foobar(arr);

alert(arr);


