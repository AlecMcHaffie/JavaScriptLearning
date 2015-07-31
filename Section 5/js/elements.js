(function() {
    'use strict';

    console.log(document.getElementById('mainHeading'));
    console.log(document.getElementsByClassName('heading'));
    console.log(document.getElementsByTagName('header'));

    var mainHeading = document.getElementById('mainHeading');
    var subHeading = document.getElementsByClassName('heading')[1];

    console.log(mainHeading.id);
    console.log(subHeading.id);

    mainHeading.id = 'firstHeading';
    console.log(mainHeading.id);
    console.log(document.getElementById('firstHeading'));

    console.log(subHeading.className);

    subHeading.classList.add('special');
    subHeading.classList.remove('special');
    console.log(subHeading.classList.contains('special'));

    console.log(mainHeading.tagName);
    console.log(mainHeading.nodeType);
    console.log(mainHeading.childNodes[0].nodeType);

    mainHeading.innerHTML = '<span>' + mainHeading.innerHTML + '</span>';
    mainHeading.outerHTML = '<p>' + mainHeading.innerHTML + '</p>';

    subHeading.textContent = 'I love Envato';
    subHeading.setAttribute('contenteditable', true);
    subHeading.removeAttribute('contenteditable');
    console.log(subHeading.hasAttribute('contenteditable'));

    //DOM Traversal
    var heading = document.getElementsByTagName('header')[0];
    var headingLength = heading.childNodes.length;

    var x, length;
    for (var x = 0; x < headingLength ; x += 1) {
        if (heading.childNodes[x].nodeType === 1) {
            console.log('I am a ' + heading.childNodes[x].tagName);
        };
    };

    console.log(heading.children.length);

    console.log(heading.childNodes[0].nodeName);
    console.log(heading.childNodes[1].nodeName);
    console.log(heading.firstChild);

    console.log(subHeading.parentNode.nodeName);

    console.log(heading.firstChild.nextSibling.nodeName);
}());
