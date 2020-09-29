const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
      if (Array.isArray(arr)) {
        return arr.reduce((level, cur) => Math.max(this.calculateDepth(cur), level), 0) + 1;
      } else {
        return 0;
      } 
  }
};