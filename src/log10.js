const POW10_VAL32 = [
  1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000
];

/**
 * Gets log-base-10 (log2 method).
 * @param {number} x an int32
 * @returns {number}
 */
function log10(x) {
  var a = ((log2(x)+1)*1233)>>>12;
  return a-(x<POW10_VAL32[a]? 1:0);
}
module.exports = log10;
