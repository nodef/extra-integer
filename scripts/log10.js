const log2 = require('@extra-integer/log2');
const POW10_VAL32 = [1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000];
function log10(a) {
  var z = ((log2(a)+1)*1233)>>>12;
  return z-(a<POW10_VAL32[z]? 1:0);
};
module.exports = log10;
