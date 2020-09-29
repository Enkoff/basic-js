const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arrStr: [],

  getLength() {
   return this.arrStr.length;
  },

  addLink(value) {
    if (value === undefined) {
      this.arrStr.push('( )');
    }
    this.arrStr.push(value);
    return this;
  },

  removeLink(position) {
    if (typeof position !== 'number' || Number.isInteger(position) === false || position < 0 || position > this.arrStr.length) {
      this.arrStr = [];
      throw Error;
    }
    this.arrStr.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.arrStr.reverse();
    return this;
  },

  finishChain() {
    let res = this.arrStr.map(el => '( ' + el + ' )').join('~~');
    this.arrStr = [];
    return res;
  }
};

module.exports = chainMaker;