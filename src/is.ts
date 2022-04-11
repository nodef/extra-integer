/**
 * Check if value is int32.
 * @param v a value
 * @returns is int32?
 */
function is(v: any): boolean {
  return typeof v==="number" && isFinite(v) && (v|0)===v;
}
export default is;
