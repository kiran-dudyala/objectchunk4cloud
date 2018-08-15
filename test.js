var objsize = require('./index');

var arraylist = [{ one: 235463 }, { 23: 325 }, { "testOne": 4734 }, { "testTwo": false }, { "TestThree": 423534 }];
var singlearray = { one: false };
var stringvalue = "Hello World!";
var boolenvalue = false;
var numbervalue = 1243524;
var buffervalue = Buffer.from(stringvalue);

console.log(objsize.getsizeofobjects(arraylist, 50));
console.log(objsize.getsizeofvalues(singlearray));
console.log(objsize.getsizeofvalues(stringvalue));
console.log(objsize.getsizeofvalues(boolenvalue));
console.log(objsize.getsizeofvalues(numbervalue));
console.log(objsize.getsizeofobjects(buffervalue));