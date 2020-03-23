/**
 * Sets bits of 32-bit integer, as per mask (not method).
 * @param {Int32} x an integer
 * @param {Int32} m bit mask
 * @param {Int32} f bit value (1)
 */
function bitSetAs(x, m, f=1) {
  return (x & ~m) | (-f & m);
}
module.exports = bitSetAs;
