/**
 * Gets a bit of 32-bit integer (right-shift method).
 * @param {Int32} x an integer
 * @param {Int32} i bit index
 */
function bitGet(x, i) {
  return (x>>>i) & 1;
}
module.exports = bitGet;
