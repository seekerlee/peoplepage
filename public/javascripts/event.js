/**
 * Created by lishi on 17/1/26.
 */
var eventManager = {};
(function(){
    var eventMap = {};

    eventManager.addListener = function(name, func) {
        if (!eventMap[name]) {
            eventMap[name] = [];
        }
        if (typeof func === "function") {
            if (eventMap[name].indexOf(func) == -1) {
                eventMap[name].push(func);
            }
        } else {
            throw "callback should be a function";
        }
    };

    eventManager.removeListener = function(name, func) {
        if (!eventMap[name]) {
            return;
        }

        if (typeof func === "function") {
            var index = eventMap[name].indexOf(func);
            if (index > -1) {
                eventMap[name].splice(index, 1);
            }
        } else {
            throw "callback should be a function";
        }
    };

    eventManager.fire = function(name) {
        var funcArr = eventMap[name];
        var args = Array.prototype.slice.call(arguments);
        args.shift();
        if (funcArr && funcArr.length > 0) {
            funcArr.forEach(function(func) {
                func.apply(null, args);
            });
        }
    };

})();