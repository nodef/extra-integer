/**
 * Gets power-of-10 of 32-bit integer (lookup method).
 * @param {Int32} x an integer
 */
function pow10(x) {
  return x<0? 0:POW10_VAL32[x];
}
module.exports = pow10;
