/**
 * Checks if value is int32.
 * @param v a value
 */
function is(v: any): boolean {
  return typeof v==="number" && isFinite(v) && (v|0)===v;
}
export default is;
