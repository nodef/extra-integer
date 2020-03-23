/**
 * Checks if value is 32-bit integer.
 * @param {*} x a value
 * @returns {boolean} true if 32-bit integer
 */
function is(x) {
  return typeof x==='number' && isFinite(x) && (x|0)===x;
}
module.exports = is;
