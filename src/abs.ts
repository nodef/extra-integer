/**
 * Get absolute value.
 * @param x an int32
 * @returns +ve value
 */
function abs(x: number): number {
  var m = x>>31;
  return (x+m)^m;
}
export default abs;
// References:
// - https://graphics.stanford.edu/~seander/bithacks.html#IntegerAbs
// - https://www.npmjs.com/package/bit-twiddle
