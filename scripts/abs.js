/**
 * Gets absolute value of 32-bit integer (xor method).
 * @param {Int32} x an integer
 */
function abs(x) {
  var m = x>>31;
  return (x+m)^m;
}
module.exports = abs;
