/**
 * Swaps bit sequences in 32-bit integer (xor method).
 * @param {Int32} x an integer
 * @param {Int32} i first bit index
 * @param {Int32} j second bit index
 * @param {Int32} n bit width
 */
function bitSwap(x, i, j, n=1) {
  var x = ((x>>>i)^(x>>>j)) & ((1<<n)-1);
  return x ^ ((x<<i)|(x<<j));
}
module.exports = bitSwap;
