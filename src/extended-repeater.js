const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let repeatTimes = options.repeatTimes;
  let separator = (!options.separator) ? "+" : options.separator;
  let addition = options.addition;
  let additionRepeatTimes = options.additionRepeatTimes;
  let additionSeparator = (!options.additionSeparator) ? "|" : options.additionSeparator;

  let appendix = addition;
  for (let i = 1; i < additionRepeatTimes; i++) {
    appendix += additionSeparator + addition;
  }
  if (appendix == undefined) appendix = "";

  let result = str;
  for (let i = 1; i < repeatTimes; i++) {
    result += appendix + separator + str;
  }
  return result + appendix;
}

module.exports = {
  repeater
};
