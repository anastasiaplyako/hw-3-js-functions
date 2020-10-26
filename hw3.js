'use strict';

function splitAndMerge(str, sp) {
    return str.split("").join(sp).split(sp + " " + sp).join(" ");
}

function convert(hash) {
    var res = [];
    for (var index in hash) {
        res.push([index, hash[index]]);
    }
    return res;
}

console.log(convert({name: 'Jeremy', age: 24, role: 'Software Engineer'}))

function toCamelCase(str) {
    return str.replace(/[-_]+/g, '-').replace(/[-_](.)/g,
        function (char) {
            return char[1].toUpperCase()
        })
}

function reverseEachWord(str) {
    var words = str.split(" ");
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].split("").reverse().join("");
    }
    return words.join(" ");
}

function stringExpansion(str) {
    if (!str.length) return "";
    return str.replace(/(\d)+([A-Za-zА-Яа-я])/g, function (match, number, letter) {
        return number.replace(/\d/g, function () {
                var tmp = letter;
                for (var i = 0; i < number - 1; i++) {
                    letter += tmp;
                }
                return letter;
            }
        );
    })
}

function largest() {
    var array = [].slice.call(arguments);
    return Math.max.apply(Math, array);
}

function smallest() {
    var array = [].slice.call(arguments);
    return Math.min.apply(Math, array);
}

function transform(baseArray) {
    return baseArray.map(function (number) {
        return function () {
            return number;
        }
    });
}

function sum() {
    var arrayArguments = [].slice.apply(arguments);
    if (!arrayArguments.length) {
        return 0;
    }
    return arrayArguments[0] + sum.apply(null, arrayArguments.slice(1));
}

function countDown(time) {
    var interval = setInterval(function () {
        console.log(time);
        time--;
        if (time < 0) {
            clearInterval(interval);
        }
    }, 1000);
    return interval;
}

countDown(3);

Function.prototype.myBind = function (context) {
    var arrayArguments = [].slice.call(arguments, 1);
    var objectThis = this;
    return function () {
        return objectThis.apply(context, arrayArguments.concat([].slice.call(arguments)))
    }
};

function addPropToNumber(number) {
    return this.prop + number;
}

var bound = addPropToNumber.myBind({prop: 9});
console.log(bound(1));// 10

module.exports = {
    countDown: countDown,
    sum: sum,
    transform: transform,
    largest: largest,
    smallest: smallest,
    stringExpansion: stringExpansion,
    reverseEachWord: reverseEachWord,
    toCamelCase: toCamelCase,
    convert: convert,
    splitAndMerge: splitAndMerge,
    bind: Function.prototype.myBind
}