'use strict';

var expect = require('chai').expect;
var objsize = require('../index');

var arraylist = [{ one: 235463 }, { 23: 325 }, { "testOne": 4734 }, { "testTwo": false }, { "TestThree": 423534 }];
var singlearray = { one: false };
var stringvalue = "Hello World!";
var boolenvalue = false;
var numbervalue = 1243524;
var buffervalue = Buffer.from(stringvalue);

describe('#Getsizeof', function() {
    it('Array List object size', function() {
        var result = objsize.getsizeofobjects(arraylist, 50);
        expect(result.totalsize).to.equal("104B");
        expect(result.eachobjectsize).to.equal("20.8B");
        expect(result.output.length).to.equal(3);
    });
    it('Object size', function() {
        var result = objsize.getsizeofobjects(singlearray);
        expect(result).to.equal(16);
    });
    it('String size', function() {
        var result = objsize.getsizeofvalues(stringvalue);
        expect(result).to.equal(24);
    });
    it('Boolean size', function() {
        var result = objsize.getsizeofvalues(boolenvalue);
        expect(result).to.equal(4);
    });
    it('Number size', function() {
        var result = objsize.getsizeofvalues(numbervalue);
        expect(result).to.equal(8);
    });
    it('Buffer size', function() {
        var result = objsize.getsizeofobjects(buffervalue);
        expect(result).to.equal("12B");
    });
});