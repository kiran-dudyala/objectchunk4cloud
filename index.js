"use strict";
let Buffer = require('buffer').Buffer;
let objuetypes = require('./helper');

function getsize(obj, size) {
  if (obj !== null) {
    if (typeof (obj) === 'object') {
      return sizeofobject(obj, size)
    } else if (typeof (obj) === 'string') {
      return obj.length * objuetypes.string;
    } else if (typeof (obj) === 'boolean') {
      return objuetypes.boolean;
    } else if (typeof (obj) === 'number') {
      return objuetypes.number;
    } else {
      return 0;
    }
  }
}

function sizeofobject(obj, size) {
  if (!Buffer.isBuffer(obj)) {
    let bytes = 0;
    let objlen = obj.length;
    for (let key in obj) {
      try {
        //If this is array of objects ex: [{one: 235463},{one: 9999999}];
        if (typeof (obj[key]) === "object") {
          for (let ko in obj[key]) {
            bytes += getsize(ko + obj[key][ko]);
          }
        } else { // If this is regular object ex: {one: 299993}
          bytes += getsize(key + obj[key]);
        }
      } catch (ex) {
        if (ex instanceof RangeError) {
          bytes = 0;
        }
      }
    }
    return bytes;
  } else {
    return obj.length;
  }
}

module.exports = getsize;
