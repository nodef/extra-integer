/**
 * Check if two values have equal sign.
 * @param x an int32
 * @param y another int32
 * @returns are signs equal?
 */
function signEqual(x: number, y: number): boolean {
  return (x^y)>=0;
}
export default signEqual;
// References:
// - https://graphics.stanford.edu/~seander/bithacks.html#DetectOppositeSigns
