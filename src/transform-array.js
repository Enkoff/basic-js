const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let disNext = '--discard-next', 
  disPrev = '--discard-prev', 
  douNext = '--double-next',
  douPrev = '--double-prev',
  newArr = []; 

 if (!Array.isArray(arr)) {
        throw Error;
       } else {
       for (let i = 0; i < arr.length; i++) {
         if (arr[i] !== disNext && arr[i] !== disPrev && arr[i] !== douNext && arr[i] !== douPrev) {
           newArr.push(arr[i]);
         } else if (arr[i] === douNext && arr[i + 1] !== undefined) {
           newArr.push(arr[i + 1]);
         } else if (arr[i] === douPrev && arr[i - 1] !== undefined && arr[i-2] !== disNext) {
           newArr.push(arr[i - 1]);
         } else if (arr[i] === disNext && arr[i + 1] !== undefined) {
           i++;
         } else if (arr[i] === disPrev && arr[i - 1] !== undefined && arr[i-2] !== disNext) {
           newArr.pop(arr[i - 1]);
         }
       }
        return newArr;
      }
};