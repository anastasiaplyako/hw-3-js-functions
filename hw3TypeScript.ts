
function splitAndMerge(str: string, sp: string) {
    var separator: string = sp + " " + sp;
    var words: string = str.split("").join(sp).split(separator).join(" ");
    console.log(words);
    return words;
}

splitAndMerge("f wrfvh", ',')

function convert(hash: object) {
    return Object.entries(hash);
}

function convertVersion2(hash: object) {
    var array: Array<any> = [];
    var keys: string[] = Object.keys(hash);
    var values: string[] = Object.values(hash);
    for (var i = 0; i < keys.length; i++) {
        array.push([keys[i], values[i]])
    }
    return array;
}

console.log(convertVersion2({name: 'Jeremy', age: 24, role: 'Software Engineer'}))

function toCamelCase(str: string) {
    str = str.replace(/[-]+/g, '-');
    str = str.replace(/[_]+/g, '-');
    str = str.replace(/[-_](.)/g, function (char) {
        return char[1].toUpperCase()
    });
    return str;
}

console.log(toCamelCase("the-stealth-warrior"));

function reverseEachWord(str: string) {
    var words: string[] = str.split(" ");
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].split("").reverse().join("")
    }
    return words.join(" ");
}

console.log(reverseEachWord(" A fun little challenge! "))

function stringExpansion(str) {
    if (str.length === 0) return "";
    var res: string = "";
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
    console.log(res)
    return res;
}

console.log(stringExpansion('3D2a5d2f'))

function largest(...args: number[]) {
    var array: number[] = [].slice.call(arguments);
    return Math.max.apply(Math, array);
}

function smallest(...args: number[]) {
    var array: number[] = [].slice.call(arguments);
    return Math.min.apply(Math, array);
}

console.log(largest(2, 0.1, -5, 100, 3))// 100
console.log(smallest(2, 0.1, -5, 100, 3)) // -5

function transform(baseArray: Array<any>) {
    return baseArray.map(function (number) {
        return function () {
            return number;
        }
    });
}

function sum(...args: number[]) {
    var arrayArguments: number[] = [].slice.apply(arguments);
    if (!arrayArguments.length) {
        return 0;
    }
    return arrayArguments[0] + sum.apply(null, arrayArguments.slice(1));
}

console.log(sum(1, 3, 5, 7)); //should return 16

const baseArray = [10, 20, 30, 40, 50];
const newArray = transform(baseArray);
console.log(newArray[3]()); // should return 40
newArray[4](); // should return 50

function countDown(time: number) {
    var interval: any = setInterval(function () {
        console.log(time);
        time--;
        if (time < 0) {
            clearInterval(interval);
        }
    }, 1000);
    return interval;
}

console.log(countDown(3));

Function.prototype.bind = function (context: object) {
    var arrayArguments: Array<any> = [].slice.call(arguments, 1);
    var objectThis: any = this;
    return function () {
        return objectThis.apply(context, arrayArguments.concat([].slice.call(arguments)))
    }
};

function addPropToNumber(number) {
    return this.prop + number;
}

var bound = addPropToNumber.bind({prop: 9});
console.log(bound(1));// 10


