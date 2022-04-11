import nextPow2 from "./nextPow2";

/**
 * Find previous power-of-2 of value.
 * @param x an int32
 * @returns previous power-of-2
 */
function prevPow2(x: number): number {
  return nextPow2(x+1)>>>1;
}
export default prevPow2;
// References:
// - https://graphics.stanford.edu/~seander/bithacks.html#RoundUpPowerOf2
// - https://www.npmjs.com/package/bit-twiddle
