function splitAndMerge(str: string, sp: string) {
    return str.split("").join(sp).split(sp + " " + sp).join(" ");
}

console.log(splitAndMerge("f wrfvh", ','))

function convert(hash: object) {
    let res = [];
    for (var index in hash) {
        res.push([index, hash[index]]);
    }
    return res;
}

console.log(convert({name: 'Jeremy', age: 24, role: 'Software Engineer'}))

function toCamelCase(str: string) {
    return str.replace(/[-_]+/g, '-').replace(/[-_](.)/g,
        function (char) {
        return char[1].toUpperCase()
    })
}

console.log(toCamelCase("the-stealth-warrior"));

function reverseEachWord(str: string) {
    var words: string[] = str.split(" ");
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].split("").reverse().join("");
    }
    return words.join(" ");
}

console.log(reverseEachWord(" A fun little challenge! "))

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


