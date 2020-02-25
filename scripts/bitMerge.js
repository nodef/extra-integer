/**
 * Merges bits from two 32-bit integers, as per mask (xor method).
 * @param {Int32} x first integer
 * @param {Int32} y second integer
 * @param {Int32} m bit mask (0 => from x)
 */
function bitMerge(x, y, m) {
  return x ^ ((x^y) & m);
}
module.exports = bitMerge;
