//DATATYPES
//PRIMARY DATA TYPES
//NUMBERS
var number = 1;
// isNan() to check if a number
// nan = not a number

//STRINGS
var string = 'hello';
var quote = '"Hello", Said the man';
var escaped = '"Oh no you didn\'t" She said';
var joined = 'wait, ' + 'what?';
//Always encased in quotes

//BOOLEAN

//TRUE or FALSE

//SPECIAL DATA TYPES
//UNDEFINED
//NULL


//OPERATORS
var addition = 1 + 1; //Addition = 2
var subtraction = 1 - 1; // Subtraction = 0
var multiplication = 5 * 2; // multiplication = 10
var division = 5 / 2.5; // division = 2
var remainder = 5 % 2; // remainder = 1

var postfix = 5; // value returned and then increment/decrement
var prefix = 5; // value increment/decrement and then returned

//Assignment Operators
var additionAssignment = 1;
additionAssignment += 1; // additionAssignment = 2
var subtractionAssignment = 1;
subtractionAssignment -= 1; // subtractionAssignment = 0

var multiplicationAssignment = 2;
var divisionAssignment = 5;
var modulusAssignment = 5;

multiplicationAssignment *= 2; // multiplicationAssignment = 4
divisionAssignment /= 2.5; // divisionAssignment = 2
modulusAssignment %= 2; // modulusAssignment = 1

//Comparison Operators
//Used in conditional statements such as if statements

//OBJECTS

var object = {
    property1: true,
    property2: 'hello'
};

function getThingByColour(colour) {
    var things = {
        red: 'a red thing',
        green: 'a green thing',
        blue: 'a blue thing'
    };

    return things[colour] || 'Sorry, no thign ith that colour exists';
};

//FUNCTIONS

function myFunction(message) {
    console.log(message);
    return true;
};
//Functions always return a value
/*
var myOtherFunction = function () {
    console.log('function expression');
}
//Anonymous function, has no identifier
*/

var myOtherFunction = function () {
    console.log('function expression');
}; //Causing issues in IE 7

console.log(hoistedVariable);
var hoistedVariable = 'test';

(function invokeImmediately() {
    console.log('invoked immediately');
}());
//iife shortcut


//SCOPE
//defines the visability of variables in different places in code
//GLOBAL = top scope. Generally the widow object
//Can be overwritten by other scripts
//globally declared variables become properties of the window object
//When a function si declared it creates it's own scope
//javascript has function scope
//scope of a variable is local to it's function
//cannot be accessed outside of function
//javascript will check local scope for a variable first and then move up to the parent scope until it reaches global
//Only functions can create a scope
//common to wrap all code in a self invoking function


//THIS
//Usual an object

//Strict Mode
//Enforces stricter rules in javascript
//recommended to always be Used
//forces silent errors to throw an error
//prevents accidental global variables
//'use strict';

(function() {
    'use strict';
    // this is undefined, function is being called automatically

    var object = {
        property: 'I belong to this',
        method: function () {
            return this.property;
        }
    };

    console.log(object.method());

    function Person(name) {
        this.name = name;
    };

    var bob = new Person('Bob');
    console.log(bob.name);
}());

//RESERVED WORDS
//Sometimes known as keywords
//Canot be used as identifiers, will throw an error
//Generally editors alert to it
