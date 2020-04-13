import DEBRUIJN_POS32 from './_DEBRUIJN_POS32';

/**
 * Gets log-base-2.
 * @param x an int32
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
