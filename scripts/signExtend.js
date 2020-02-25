/**
 * Sign extends variable bit-width integer to 32-bit integer.
 * @param {Int32} x variable bit-width integer
 * @param {Int32} n bit width
 */
function signExtend(x, n) {
  n = 32-n;
  return (x<<n)>>n;
}
module.exports = signExtend;
