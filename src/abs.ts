/**
 * Gets absolute value (xor method).
 * @param x an int32
 */
function abs(x: number): number {
  var m = x>>31;
  return (x+m)^m;
}
export default abs;
