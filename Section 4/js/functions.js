(function() {
    'use strict';

    var testFunction = function testFunction(arg1, arg2) {
        return arg1 + arg2;
    };

    console.log(testFunction.length);

    var person = {
        name: 'Alec',
        job: 'Developer'
    };

    function introduce(inductee) {
        console.log('Hey ' + inductee + '! My name is ' + this.name + ', and I\'m a ' + this.job);
    };

    introduce.call(person, 'Bob');

    function chat(respondent, subject) {
        console.log('So ' + respondent + ', what about the ' + subject + ' pretty good for a ' + this.job + ' like me right?');
    };

    function engage(mode, object, args) {
        mode.apply(object, args);
    };

    engage(introduce, person, ['Fred']);
    engage(chat, person, ['Al', 'new IDE']);

    function addToCart(fee, price) {
        if (!this.total) {
            this.total = 0;
        };
        this.total += price += fee || 0;
        return this.name + '\'s cart total is £' + this.total;
    };

    var alecsCart = addToCart.bind(person, 1);

    console.log(alecsCart(50));
    console.log(alecsCart(20));

    var bob = {
        name: 'bob'
    };

    var bobsCart = addToCart.bind(bob, 5);
    console.log(bobsCart(23));
    console.log(bobsCart(102));

}());
