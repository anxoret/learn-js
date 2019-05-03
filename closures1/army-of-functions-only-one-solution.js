function makeArmy() {

    var shooters = [];

        for (var i = 0; i < 10; i++) {

            function newf() {
                var k = i;
                var shooter = function() { // функция-стрелок
                    alert( k ); // выводит свой номер
                };
                shooters.push(shooter);
            };
            newf();
        }

    return shooters;

}



var army = makeArmy();

// alert(makeArmy());

army[0](); // стрелок выводит 10, а должен 0
army[5](); // стрелок выводит 10...
// // .. все стрелки выводят 10 вместо 0,1,2...9