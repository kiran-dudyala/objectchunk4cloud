"use strict";
let Buffer = require('buffer').Buffer;

const numberval = 8;
const stringval = 2;
const booleanval = 4;

let Kilobyte = 1000;
let Megabyte = Kilobyte * Kilobyte;
let Gigabyte = Megabyte * Kilobyte;

function getsizeofvalues(obj) {
  if (typeof (obj) === 'string') {
    return obj.length * stringval;
  } else if (typeof (obj) === 'boolean') {
    return booleanval;
  } else if (typeof (obj) === 'number') {
    return numberval;
  } else {
    return 0;
  }
}

function getsizeofobjects(obj, size) {
  if (obj !== null && typeof (obj) === 'object') {
    if (Buffer.isBuffer(obj)) {
      return converto2storagevalue(obj.length);
    } else {
      let bytes = processobjects(obj);
      if (size != undefined) {
        return chunkobject(obj, size, bytes)
      } else {
        return bytes;
      }
    }
  }
}

function processobjects(obj) {
  let bytes = 0;
  for (let key in obj) {
    try {
      //If this is array of objects ex: [{one: 235463},{one: 9999999}];
      if (typeof (obj[key]) === "object") {
        for (let ko in obj[key]) {
          bytes += getsizeofvalues(ko + obj[key][ko]);
        }
      } else { // If this is regular object ex: {one: 299993}
        bytes += getsizeofvalues(key + obj[key]);
      }
    } catch (ex) {
      bytes = 0;
    }
  }
  return bytes;
}

function chunkobject(obj, size, bytes) {
  let single = bytes / obj.length;
  let j, resarray = [], chunk = Math.floor(size / single);
  for (let k = 0, j = obj.length; k < j; k += chunk) {
    resarray.push(obj.slice(k, k + chunk));
  }
  let result = { totalsize: converto2storagevalue(bytes), eachobjectsize: converto2storagevalue(single), output: resarray };
  return result;
}

function converto2storagevalue(bytes) {
  if (bytes < Kilobyte)
    return bytes + "B";
  else if (bytes >= Kilobyte && bytes < Megabyte)
    return bytes + "KB";
  else if (bytes >= Megabyte && bytes < Gigabyte)
    return bytes + "MB";
  else
    return bytes + "TB";
}
module.exports = {
  getsizeofvalues,
  getsizeofobjects
}