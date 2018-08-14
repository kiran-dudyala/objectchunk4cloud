'use strict';

var expect = require('chai').expect;
var size = require('../index');

var arraylist = [{ one: 235463 }, { 23: 325 }, { "testOne": 4734 }, { "testTwo": false }, { "TestThree": 423534 }];
var singlearray = { one: false };
var stringvalue = "Hello World!";
var boolenvalue = false;
var numbervalue = 1243524;
var buffervalue = Buffer.from(stringvalue);

describe('#Getsizeof', function() {
    it('Array List object size', function() {
        var result = size.chunksize(arraylist, 50);
        expect(result.totalsize).to.equal("104B");
        expect(result.eachobjectsize).to.equal(20.8);
        expect(result.output.length).to.equal(3);
    });
    it('Object size', function() {
        var result = size.getsize(singlearray);
        expect(result).to.equal(16);
    });
    it('String size', function() {
        var result = size.getsize(stringvalue);
        expect(result).to.equal(24);
    });
    it('Boolean size', function() {
        var result = size.getsize(boolenvalue);
        expect(result).to.equal(4);
    });
    it('Number size', function() {
        var result = size.getsize(numbervalue);
        expect(result).to.equal(8);
    });
    it('Buffer size', function() {
        var result = size.getsize(buffervalue);
        expect(result).to.equal("12B");
    });
});