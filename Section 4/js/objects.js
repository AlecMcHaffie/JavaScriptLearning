(function() {
    'use strict';

    var myObject = {};

    console.log(myObject.constructor);
    console.log(myObject.hasOwnProperty('constructor')); //Returns false because constructor is inherited
    myObject.testProperty = 'test'; //Creates testProperty because it doesn't exist yet
    console.log(myObject.hasOwnProperty('testProperty')); //returns true

    console.log(myObject.propertyIsEnumerable('constructor')); //false, constructor doesn't get itterated
    console.log(myObject.propertyIsEnumerable('testProperty')); // true, does get itterated

    console.log(myObject.toString());
    console.log(['test', 'something'].toString());

    console.log(Object.prototype.toString.call([]));
    //uses call method to call the toString method of the objects prototype
}());
