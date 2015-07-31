(function() {
    'use strict';


    function onPositionRecieved(position) {
        console.log(position);
    };

    function onPositionFailed(positionError) {
        console.log(positionError);
    };

    function onPositionChanged(position) {
        console.log('new position is: ' + position.coords.latitude + ', ' + position.coords.longitude);
    };

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(onPositionRecieved, onPositionFailed, {
            timeout: 0
        });

        var watch = navigator.geolocation.watchPosition(onPositionChanged, onPositionFailed);

        

    };



}());
