/**
 * Check if value is a power-of-2.
 * @param x an int32
 * @returns is power-of-2?
 */
function isPow2(x: number): boolean {
  return (x & (x-1))===0;
}
export default isPow2;
// References:
// - https://graphics.stanford.edu/~seander/bithacks.html#DetermineIfPowerOf2
// - https://www.npmjs.com/package/bit-twiddle
