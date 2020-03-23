/**
 * Checks if two values have equal sign (xor method).
 * @param {number} x first int32
 * @param {number} y second int32
 * @returns {boolean}
 */
function signEqual(x, y) {
  return (x^y)>=0;
}
module.exports = signEqual;
