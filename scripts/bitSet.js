/**
 * Sets a bit of 32-bit integer (left-shift method).
 * @param {Int32} x an integer
 * @param {Int32} i bit index
 * @param {Int32} f bit value (1)
 */
function bitSet(x, i, f=1) {
  return (x & ~(1<<i)) | (f<<i);
}
module.exports = bitSet;
