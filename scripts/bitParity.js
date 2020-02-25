/**
 * Gets bit parity of 32-bit integer (parallel method).
 * @param {Int32} x an integer
 */
function bitParity(x) {
  x ^= x>>>16;
  x ^= x>>>8;
  x ^= x>>>4;
  x &= 0xF;
  return (0x6996>>>x) & 1;
}
module.exports = bitParity;
