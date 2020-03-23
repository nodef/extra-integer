/**
 * Gets power-of-10 (lookup method).
 * @param {number} x an int32
 * @returns {number}
 */
function pow10(x) {
  return x<0? 0:POW10_VAL32[x];
}
module.exports = pow10;
