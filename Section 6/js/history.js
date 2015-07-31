(function () {
    'use strict';

    function loadPage(xhr, urlToLoad) {
        xhr.onload = function () {
            var response = xhr.responseText;
            parseAndInsertPage(response);

        }

        xhr.open('GET', urlToLoad, true);
        xhr.send();
    }

    function parseAndInsertPage(pageString) {
        var bodyTemp = pageString.split('<head>')[1],
            body = bodyTemp.split('</html>')[0];

        document.body.outerHTML = body;
    }

    document.addEventListener('click', function (e) {
        if (e.target.nodeName === 'A') {
            e.preventDefault();

            var xhr = new XMLHttpRequest,
                newUrl = e.target.href;

            loadPage(xhr, newUrl);

        }
    });
}());
