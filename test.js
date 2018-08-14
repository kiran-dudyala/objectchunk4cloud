var size  = require('./index');

var a = [{ one: 235463 }, { 23: 325 }, { "testOne": 4734 }, { "testTwo": false }, { "TestThree": 423534 }];
var b = { one: false };
var c = "Hello World!";
var d = false;
var e = 1243524;
var f = Buffer.from("Hello World!")
console.log(size.chunksize(a, 50));
console.log(size.getsize(b));
console.log(size.getsize(c, 2));
console.log(size.getsize(d));
console.log(size.getsize(e));
console.log(size.getsize(f));