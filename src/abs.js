/**
 * Gets absolute value (xor method).
 * @param {number} x an int32
 * @returns {number}
 */
function abs(x) {
  var m = x>>31;
  return (x+m)^m;
}
module.exports = abs;
