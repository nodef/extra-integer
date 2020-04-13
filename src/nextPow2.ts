/**
 * Gets next power-of-2 (bit-shift method).
 * @param x an int32
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
