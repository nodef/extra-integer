/**
 * Interleaves bits of two 16-bit integers to form 32-bit integer (binary magic method).
 * @param {Int32} x first 16-bit integer
 * @param {Int32} y second 16-bit integer
 */
function bitInterleave(x, y) {
  x = (x | (x<<8)) & 0x00FF00FF;
  x = (x | (x<<4)) & 0x0F0F0F0F;
  x = (x | (x<<2)) & 0x33333333;
  x = (x | (x<<1)) & 0x55555555;
  y = (y | (y<<8)) & 0x00FF00FF;
  y = (y | (y<<4)) & 0x0F0F0F0F;
  y = (y | (y<<2)) & 0x33333333;
  y = (y | (y<<1)) & 0x55555555;
  return y | (x<<1);
}
module.exports = bitInterleave;
