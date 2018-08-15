[![Build Status](https://travis-ci.org/kiran-dudyala/objectchunk4cloud.svg?branch=master)](https://travis-ci.org/kiran-dudyala/objectchunk4cloud)

### ObjectChunk4Cloud

  Before we know ObjectChunk4Cloud, let me introduce why I have written this package. We all have come across cloud computing where the provider place a restriction on object size limit when reading or writing ex:(AWS DynamoDB has 1KB x 5 write capacity). 
  
  And as a developer we need to take these calculations into account and make consistent writes to avoid bill shocks. 

  Now, ObjectChunk4Cloud is a little package that is intended to address these issues. This package gets the size of the object such as (Number, String, Arrays, Buffer, Boolean). And, it chunks the array objects into user defined size in bytes.


## Installation
  
  `npm install objectchunk4cloud --save`

## Usage Example
  
  ```javascript
  var objsize = require('objectchunk4cloud');
 
  var arraylist = [{ one: 235463 }, { 23: 325 }, { "testOne": 4734 }, { "TestThree": 423534 }];
  var singlearray = { one: false };
  var stringvalue = "Hello World!";
  var boolenvalue = false;
  var numbervalue = 1243524;
  var buffervalue = Buffer.from(stringvalue);

  var chunkarraysize = 50; // 50 Bytes

  console.log(objsize.getsizeofobjects(arraylist, chunkarraysize)); //{totalsize: "80B", eachobjectsize: "20B", output: Array(2)}
  console.log(objsize.getsizeofobjects(singlearray)); //=> 16 Bytes
  console.log(objsize.getsizeofvalues(stringvalue)); //=> 24 Bytes
  console.log(objsize.getsizeofvalues(boolenvalue)); //=> 4 Bytes
  console.log(objsize.getsizeofvalues(numbervalue)); //=> 8 Bytes
  console.log(objsize.getsizeofobjects(buffervalue)); //=> 12 Bytes
  ```
### Tests

  `npm test`

### Licence
  ObjectChunk4Cloud is licensed under a MIT license.
