(function() {
    'use strict';

    console.log(window.sessionStorage);

    window.sessionStorage.setItem('testItem', true);
    window.sessionStorage.setItem('testItem2', ['test1', 'test2']);
    window.sessionStorage.setItem('testItem3', JSON.stringify({prop1: 'oops'}));

    console.log(JSON.parse(window.sessionStorage.getItem('testItem3')));

    function readStorageKeys() {
        var x, length;
        for (var x = 0; x < window.sessionStorage.length; x++) {
            console.log(window.sessionStorage.key(x));
        };
    };

    readStorageKeys();

    window.sessionStorage.removeItem('testItem3');
    

}());
