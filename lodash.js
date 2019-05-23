// import _ from "lodash";
const _ = require("lodash");

let array = [1, 3, 5, 6, 8];
const chunkArr = _.chunk(array, 2);
console.log(chunkArr);

console.log(_.reverse(array));

console.log(_.without(array, 5));

console.log(_.initial(array));

console.log(_.flatten(chunkArr));
