const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  let spring = 'spring',
      summer = 'summer',
      autumn = 'fall',
      winter = 'winter';
      
    if (date === undefined || date === null) {
      return 'Unable to determine the time of year!';
    } else if (Object.prototype.toString.call(date) !== '[object Date]') {
        throw Error;
    } else {
    let  month = date.getMonth() + 1;
    if (month < 3 || month === 12) {
      return winter;
    }
    if (month > 2 && month < 6) {
      return spring;
    }
    if (month > 5 && month < 9) {
      return summer;
    }
    if (month > 8 && month < 12) {
      return autumn;
    }
  }
};