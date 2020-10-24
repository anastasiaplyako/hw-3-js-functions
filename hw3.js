'use strict';

function splitAndMerge(str, sp) {
    var separator = sp + " " + sp;
    var words = str.split("").join(sp).split(separator).join(" ");
    console.log(words);
    return words;
}

function convert(hash) {
    return Object.entries(hash);
}

function convertVersion2(hash) {
    var array = [];
    var keys = Object.keys(hash);
    var values = Object.values(hash);
    for (var i = 0; i < keys.length; i++) {
        array.push([keys[i], values[i]])
    }
    return array;
}

function toCamelCase(str) {
    str = str.replace(/[-]+/g, '-');
    str = str.replace(/[_]+/g, '-');
    str = str.replace(/[-_](.)/g, function (char) {
        return char[1].toUpperCase()
    });
    return str;
}

function reverseEachWord(str) {
    var words = str.split(" ");
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].split("").reverse().join("")
    }
    return words.join(" ");
}

function stringExpansion(str) {
    if (str.length === 0) return "";
    var res = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i].match(/^-{0,1}\d+$/)) {
            for (var j = 1; j < str[i]; j++) {
                if (!str[i + 1].match(/^-{0,1}\d+$/)) {
                    res += str[i + 1];
                }
            }
        } else {
            res += str[i]
        }
    }
    return res;
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
    convertVersion2: convertVersion2,
    convert: convert,
    splitAndMerge: splitAndMerge,
    bind: Function.prototype.myBind
}