/**
 * Find next power-of-2 of value.
 * @param x an int32
 * @returns next power-of-2
 */
function nextPow2(x: number): number {
  x--;
  x |= x>>>1;
  x |= x>>>2;
  x |= x>>>4;
  x |= x>>>8;
  x |= x>>>16;
  return x+1;
}
export default nextPow2;
// References:
// - https://graphics.stanford.edu/~seander/bithacks.html#RoundUpPowerOf2
// - https://www.npmjs.com/package/bit-twiddle
