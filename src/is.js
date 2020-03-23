/**
 * Checks if value is int32.
 * @param {*} x a value
 * @returns {boolean}
 */
function is(x) {
  return typeof x==='number' && isFinite(x) && (x|0)===x;
}
module.exports = is;
