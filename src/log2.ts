import DEBRUIJN_POS32 from "./_DEBRUIJN_POS32";

/**
 * Find log-base-2 of value.
 * @param x an int32
 * @returns log-base-2 result
 */
function log2(x: number): number {
  x |= x>>>1;
  x |= x>>>2;
  x |= x>>>4;
  x |= x>>>8;
  x |= x>>>16;
  return DEBRUIJN_POS32[(x*0x07C4ACDD)>>>27];
}
export default log2;
// References:
// - https://graphics.stanford.edu/~seander/bithacks.html#IntegerLogDeBruijn
// - https://www.npmjs.com/package/bit-twiddle
