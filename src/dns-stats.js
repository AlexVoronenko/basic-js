const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */


function getDNSStats(domains) {
  let result = {};
  if (domains.length === 0) return result;

  for (let i = 0; i < domains.length; i++) {
    let domainArray = domains[i].split(".");
    let str = "";
    for (let dns = 0; dns < domainArray.length; dns++) {
      str = str + "." + domainArray[domainArray.length - dns - 1];
      if (result.hasOwnProperty(str)) {
        result[str]++;
      } else {
        result[str] = 1;
      }
    }
  }
  return result;
}

module.exports = {
  getDNSStats
};
