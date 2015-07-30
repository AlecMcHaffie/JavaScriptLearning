(function() {
    'use strict';

    var array = ['one','two', 'three'];

    console.log(array.length);

    array.push('four');
    console.log(array);

    array.unshift('Zero');
    console.log(array);

    console.log(array.pop());
    console.log(array);
    console.log(array.shift());

    array.splice(0, 3, 'a', 'b', 'c');
    console.log(array);

    console.log(array.reverse());

    console.log(array.sort());
    console.log(['a', 'b', 'C'].sort());

    console.log([1, 56, 10000].sort());
    console.log([1, 56, 10000].sort(function (a,b) {
        if (a < b) {
            return -1;
        } else if (a === b) {
            return 0;
        } else {
            return 1;
        };
    }));

    console.log(array.join()); //Uses comma by default
    console.log(array.join(''));

    console.log(array.indexOf('b'));

    console.log(array.slice(1)); //first argument states where to start from, is included in final string
    console.log(array.slice(-2)); //works backwards
    console.log(array.slice(0, 1));
    console.log(array.slice(1, -1));

}());
