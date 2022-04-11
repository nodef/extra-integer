/**
 * Find power-of-2 of value.
 * @param x an int32
 * @returns power-of-2
 */
function pow2(x: number): number {
  return 1<<x;
}
export default pow2;
// References:
// - https://graphics.stanford.edu/~seander/bithacks.html
