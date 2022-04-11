import POW10_VAL32 from "./_POW10_VAL32";

/**
 * Finds power-of-10 of value.
 * @param x an int32
 */
function pow10(x: number): number {
  return x<0? 0:POW10_VAL32[x];
}
export default pow10;
// References:
// - https://graphics.stanford.edu/~seander/bithacks.html
