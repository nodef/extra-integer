const MOD37_POS32 = [
  32, 0, 1, 26, 2, 23, 27, 0, 3, 16, 24, 30, 28, 11, 0, 13, 4, 7, 17, 0,
  25, 22, 31, 15, 29, 10, 12, 6, 0, 21, 14, 9, 5, 20, 8, 19, 18
];

/**
 * Gets index of first set bit from left of 32-bit integer (mod37 method).
 * @param {Int32} x an integer
 */
function bitScan(x) {
  return MOD37_POS32[(-x & x) % 37];
}
module.exports = bitScan;
