const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let array = Array.prototype.concat.apply([], matrix),
      cats = 0,
      newLocal = "^^";

 for (let i = 0; i < array.length; i++) {
     if (array[i] === newLocal) {
       cats++;
     }
    }
    
 return cats;
};