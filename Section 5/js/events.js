(function() {
    'use strict';

    var subHeading = document.getElementsByTagName('h2')[0];
    var header = document.getElementsByTagName('header')[0];

    // subHeading.addEventListener('click', function () {
    //     console.log('The H2 was clicked!');
    // });

    header.addEventListener('click', function (e) {
        console.log('The ' + e.target.nodeName + ' was clicked');
        e.stopPropagation();
    });

    document.addEventListener('click', function () {
        console.log('Something was clicked');
        header.removeEventListener('mouseenter', mouseenterHandler);
    });

    var anchor = document.createElement('a');
    anchor.textContent = 'google';
    anchor.setAttribute('href', 'http://google.co.uk');
    document.body.appendChild(anchor);

    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        console.log('navigation prevented');
    });

    function mouseenterHandler() {
        console.log('The mouse has entered the header');
    };
    header.addEventListener('mouseenter', mouseenterHandler);


}());
