/**
 * Checks if two values have equal sign (xor method).
 * @param x first int32
 * @param y second int32
 */
function signEqual(x: number, y: number): boolean {
  return (x^y)>=0;
}
export default signEqual;
