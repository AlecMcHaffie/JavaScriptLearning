(function() {
    'use strict';

    var newObject = {};
    Object.prototype.mySpecialProperty = 'special!';
    console.log(newObject.mySpecialProperty);

    var newArray = [1, 2, 3];
    if (!Array.prototype.first) {
        Array.prototype.first = function () {
            return this[0];
        };
    }

    console.log(newArray.first());

    newObject.prop1 = 'prop1';
    Object.keys(newObject).forEach(function (item) {
        console.log(newObject[item]);
    });

    Object.freeze(newObject); //Stops property from being over written

    if(!Object.isFrozen(newObject)){
        newObject.prop1 = "Changed!";
    }

    var unFrozenObj = {};
    Object.keys(newObject). forEach(function (item) {
        unFrozenObj[item] = newObject[item];
    });

    Object.seal(unFrozenObj);

    unFrozenObj.prop1 = "New proerty value";

    console.log(unFrozenObj.prop1);

}());
