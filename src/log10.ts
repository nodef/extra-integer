import log2 from "./log2";
import POW10_VAL32 from "./_POW10_VAL32";

/**
 * Find log-base-10 of value.
 * @param x an int32
 * @returns log-base-10 result
 */
function log10(x: number): number {
  var a = ((log2(x)+1)*1233)>>>12;
  return a-(x<POW10_VAL32[a]? 1:0);
}
export default log10;
// References:
// - https://graphics.stanford.edu/~seander/bithacks.html#IntegerLog10
// - https://www.npmjs.com/package/bit-twiddle
