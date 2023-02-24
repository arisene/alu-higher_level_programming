#!/usr/bin/node
const myList = require('./100-data.js').list;
const myList2 = myList.map((num, idx) => num * idx);
console.log(myList);
console.log(myList2);
