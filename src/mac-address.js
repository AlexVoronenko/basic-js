const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let macMatrix = n.split("-");
  let result = true;
  for (i = 0; i < macMatrix.length; i++) {
    if (macMatrix[i].length !== 2) result = false;
    let regexp = /^[\da-f]+$/i; // Десятичные цифры и буквы от A до F.
    if (!regexp.test(macMatrix[i])) result = false;
  }
  if (macMatrix.length !== 6) result = false;
  return result;
}

module.exports = {
  isMAC48Address
};
