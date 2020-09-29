const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(expression = true) {
    this.expression = expression ? 'direct' : 'reverse'
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw Error;
    };

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    message = message.toUpperCase();
    key = key.toUpperCase();
    let result = '';

    for (let i = 0, j = 0; i < message.length; i++) {
      if (message[i].match(/^[A-Z]$/)) {
        let letterNumber = (message[i].charCodeAt() + (key[j % key.length]).charCodeAt() - 130) % 26;
        let letter = alphabet.charAt(letterNumber);
        result += letter;
        j++;
      } else {
        result += message[i];
      }
    }
  
    return this.expression === 'reverse'? result.split('').reverse().join(''): result;
  }


  decrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw Error;
    };

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    message = message.toUpperCase();
    key = key.toUpperCase();
    let result = '';

    for (let i = 0, j = 0; i < message.length; i++) {
      if (message[i].match(/^[A-Z]$/)) {
        let letterNumber = (message[i].charCodeAt() - (key[j % key.length]).charCodeAt() + 104) % 26;
        let letter = alphabet.charAt(letterNumber);
        result += letter;
        j++;
      } else {
        result += message[i];
      }
    }
    return this.expression === 'reverse'? result.split('').reverse().join(''): result;
  }
}

module.exports = VigenereCipheringMachine;