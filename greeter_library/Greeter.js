//immediately invoked function is used
(function(global, $) {
    // here, we return a new function inside this function
    // so that we dont need to call new keyword all the time
    var Greeter = function(firstname, lastname, language) {
        return new Greeter.init(firstname, lastname, language);
    }

    Greeter.prototype = {};

    Greeter.init = function(firstname, lastname, language) {

        // just to remove confusions with 'this' keyword
        var self = this;

        self.firstname || '';
        self.lastname || '';
        self.language || 'en';

        Greeter.init.prototype = Greeter.prototype;

        global.Greeter = global.G$ = Greeter;
    }
}(window, jQuery));