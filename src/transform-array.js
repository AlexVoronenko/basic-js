const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
  let result = [];
  arr.map((value, index) => {
    if (arr[index - 1] === "--discard-next") {
      result.push([]);
    } else if (value === "--discard-prev") {
      result.pop();
    } else if (arr[index - 1] === "--double-next") {
      result.push(value, value);
    } else if (value === "--double-prev") {
      result.push(((result[result.length - 1]) ?? []));
    } else if (value !== "--double-next" && value !== "--discard-next")
      result.push(value);
  });
  return result.flat();
}

module.exports = {
  transform
};
