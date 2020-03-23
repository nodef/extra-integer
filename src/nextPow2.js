/**
 * Gets next power-of-2 of 32-bit integer (bit-shift method).
 * @param {Int32} x an integer
 */
function nextPow2(x) {
  x--;
  x |= x>>>1;
  x |= x>>>2;
  x |= x>>>4;
  x |= x>>>8;
  x |= x>>>16;
  return x+1;
}
module.exports = nextPow2;
