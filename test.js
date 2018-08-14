var size  = require('./index');

var arraylist = [{ one: 235463 }, { 23: 325 }, { "testOne": 4734 }, { "testTwo": false }, { "TestThree": 423534 }];
var singlearray = { one: false };
var stringvalue = "Hello World!";
var boolenvalue = false;
var numbervalue = 1243524;
var buffervalue = Buffer.from(stringvalue);

console.log(size.chunksize(arraylist, 50));
console.log(size.getsize(singlearray));
console.log(size.getsize(stringvalue));
console.log(size.getsize(boolenvalue));
console.log(size.getsize(numbervalue));
console.log(size.getsize(buffervalue));