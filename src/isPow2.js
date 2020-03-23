/**
 * Checks if 32-bit integer is a power-of-2 (decrement method).
 * @param {Int32} x an integer
 */
function isPow2(x) {
  return (x & (x-1))===0;
}
module.exports = isPow2;
