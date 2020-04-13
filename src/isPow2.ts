/**
 * Checks if value is a power-of-2 (decrement method).
 * @param x an int32
 */
function isPow2(x: number): boolean {
  return (x & (x-1))===0;
}
export default isPow2;
