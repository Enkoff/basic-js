const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let arrStrRes = [],
      additionArr = [],
      addArrRes,
      string = String(str),
      repeatTimes = Number.isInteger(options.repeatTimes) && options.repeatTimes > 0 ? options.repeatTimes : 1,
      separator = (options.separator === undefined) ? '+' : options.separator,
      addition = (options.addition === undefined) ? '' : String(options.addition),
      additionRepeatTimes = Number.isInteger(options.additionRepeatTimes) && options.additionRepeatTimes > 0 ? options.additionRepeatTimes : 1,
      additionSeparator = (options.additionSeparator === undefined) ? '|' : options.additionSeparator;
  
for (let i = 0; i < additionRepeatTimes; i++) {
 additionArr.push(addition);
}

addArrRes = additionArr.join(additionSeparator);

for (let j = 0; j < repeatTimes; j++) {
  arrStrRes.push(string + addArrRes);
}

return arrStrRes.join(separator);
};