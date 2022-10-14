const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let array = String(n).split("");
  let matrix = [];
  array.forEach((x, i, array) => {
    let currentDig = [];
    for (let ind = 0; ind < array.length; ind++) {
      if (ind !== i) currentDig.push(array[ind]);
    }
    matrix.push(currentDig.join(""));
  })
  return Math.max.apply(null, matrix);
}

module.exports = {
  deleteDigit
};
