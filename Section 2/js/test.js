(function() {
    'use strict';

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

    
}());
