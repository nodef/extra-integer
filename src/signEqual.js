/**
 * Checks if two 32-bit integers have equal sign (xor method).
 * @param {Int32} x first integer
 * @param {Int32} y second integer
 */
function signEqual(x, y) {
  return (x^y)>=0;
}
module.exports = signEqual;
