(function() {
    'use strict';

    function log() {
        console.log('better!');
    };
    setTimeout(log);

    setTimeout(function () {
        console.log('woo');
    }, 1000);

    function pulse() {
        console.log('boom boom');
        counter += 1;

        if (counter === 5) {
            clearInterval(interval);
        };
    };

    var interval = setInterval(pulse, 1000),
        counter = 0;
}());
