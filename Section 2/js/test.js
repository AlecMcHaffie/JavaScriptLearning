(function() {
    'use strict';

    //IF STATEMENTS//

    if (1 + 1 === 3) {
        console.log('The Expressions Is true');
    };

    if (true === false) {
        console.log('We willl never see this');
    } else {
        console.log('We will see this');
    };

    var colour = 'red';

    if (colour === 'blue') {
        console.log('It is blue');
    } else if (colour === 'green') {
        console.log('It is green');
    } else {
        console.log('It is Red');
    };

    if (1) {
        console.log('We will definitely see this');
    };

    var array = ['item1'];
    if (array.length) {
        console.log(array[0]);
    };

    var arrayTwo = [];
    if (arrayTwo.length) {
        console.log('Yes');
    } else {
        console.log('No');
    };

    //SWITCH STATEMENTS//

    var switcher = 'three';

    switch (switcher) {
        case 'one':
            console.log('one');
            break;
        case 'two':
            console.log('two');
            break;
        default:
            console.log(switcher);

    };

    //LOOPS//

    var anArray = ['Item1', 'Item2', 'Item3'];

    for (var i = 0, x = anArray.length; i < x; i += 1) {
        console.log(anArray[i]);
    };

    var anObject = {
        prop1: 'property1',
        prop2: 'property2',
        prop3: 'property3',
    };

    for (var prop in anObject) {
        if (anObject.hasOwnProperty(prop)) {
            console.log(anObject[prop]);
        }
    }; //Slowest type of loop

    var limit = 0;
    while (limit < 5) {
        limit ++;
        console.log(limit);
    };

    var condition = true;
    do {
        console.log('once');
        break;
    } while (condition);


}());
