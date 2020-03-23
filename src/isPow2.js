/**
 * Checks if value is a power-of-2 (decrement method).
 * @param {number} x an int32
 * @returns {boolean}
 */
function isPow2(x) {
  return (x & (x-1))===0;
}
module.exports = isPow2;
