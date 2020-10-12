const mocha = require('mocha');
const chai = require('chai');
var app = require('./hw3.js');
var expect = require('chai').expect;

describe("splitAndMerge", function () {
    it("insert a separator between characters other than a space", function () {
        chai.assert.equal(app.splitAndMerge("My name is John", " "), "M y n a m e i s J o h n");
    });
    it("insert a separator between characters other than a space", function () {
        chai.assert.equal(app.splitAndMerge("Hello World!", ","), "H,e,l,l,o W,o,r,l,d,!");
    });

});

describe("convert", function () {
    it('Convert a hash into an array.', () => {
        expect(app.convert({
            name: 'Jeremy',
            age: 24,
            role: 'Software Engineer'
        })).to.eql([["name", "Jeremy"], ["age", 24], ["role", "Software Engineer"]], 'arrays are not equal');
    });

})

describe("convertVersion2", function () {
    it('Convert a hash into an array.', () => {
        expect(app.convertVersion2({
            name: 'Jeremy',
            age: 24,
            role: 'Software Engineer'
        })).to.eql([["name", "Jeremy"], ["age", 24], ["role", "Software Engineer"]], 'arrays are not equal');
    });

})

describe("toCamelCase", function () {
    it("converts dash/underscore delimited words into camel casing", function () {
        chai.assert.equal(app.toCamelCase("the-stealth-warrior"), "theStealthWarrior");
    });
    it("converts dash/underscore delimited words into camel casing", function () {
        chai.assert.equal(app.toCamelCase("The_Stealth_Warrior"), "TheStealthWarrior");
    });
    it("converts dash/underscore delimited words into camel casing", function () {
        chai.assert.equal(app.toCamelCase("the----stealth---warrior"), "theStealthWarrior");
    });
    it("converts dash/underscore delimited words into camel casing", function () {
        chai.assert.equal(app.toCamelCase("the__stealth-warrior"), "theStealthWarrior");
    });
});

describe("reverseEachWord", function () {
    it("takes a sentence (string) and reverses each word in the sentence.", function () {
        chai.assert.equal(app.reverseEachWord(" A fun little challenge! "), " A nuf elttil !egnellahc ");
    });

});


describe("stringExpansion", function () {
    it("The numeric values represent the occurance of each letter preceding that numeric value. ", function () {
        chai.assert.equal(app.stringExpansion("3D2a5d2f"), "DDDaadddddff");
    });
    it("The numeric values represent the occurance of each letter preceding that numeric value. ", function () {
        chai.assert.equal(app.stringExpansion("3d332f2a"), "dddffaa");
    });
    it("The numeric values represent the occurance of each letter preceding that numeric value. ", function () {
        chai.assert.equal(app.stringExpansion("abcde"), "abcde");
    });

});

describe("largest / smallest", function () {
    it("returns the largest number passed like a argument.", function () {
        chai.assert.equal(app.largest(2, 0.1, -5, 100, 3), 100);
    });
    it("returns the smallest number passed like a argument.", function () {
        chai.assert.equal(app.smallest(2, 0.1, -5, 100, 3), -5);
    });
});


describe("transform", function () {
    const baseArray = [10, 20, 30, 40, 50];
    const newArray = app.transform(baseArray);
    it("transform array of numbers to array of functions that will return value from a base array.", function () {
        chai.assert.equal(newArray[3](), 40);
    });
    it("transform array of numbers to array of functions that will return value from a base array.", function () {
        chai.assert.equal(newArray[4](), 50);
    });

});

describe("sum", function () {
    it("expects arbitrary number of digit arguments and returns compound value of them", function () {
        chai.assert.equal(app.sum(1,3,5,7), 16);
    });
});

describe("bind", function () {
    function addPropToNumber(number) {
        return this.prop + number;
    }
    var bound = addPropToNumber.myBind({prop: 9});
    it("polyfill for a .bind() ", function () {
        chai.assert.equal(bound(1), 10);
    });
});