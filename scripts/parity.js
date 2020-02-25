/**
 * Gets n-bit parity of 32-bit integer.
 * @param {Int32} x an integer
 * @param {Int32} n number of bits (1)
 */
function parity(x, n=1) {
  var m = (1<<n)-1, a = 0|0;
  while(x) {
    a ^= x&m;
    x >>>= n;
  }
  return a;
}
module.exports = parity;
