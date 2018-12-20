const DEBRUIJN_POS32 = [
  0,  9,  1, 10, 13, 21,  2, 29, 11, 14, 16, 18, 22, 25,  3, 30,  8, 12, 20, 28, 15, 17, 24,  7,
  19, 27, 23,  6, 26,  5,  4, 31
];
function log2(a) {
  a |= a>>>1;
  a |= a>>>2;
  a |= a>>>4;
  a |= a>>>8;
  a |= a>>>16;
  return DEBRUIJN_POS32[(a*0x07C4ACDD)>>>27];
};
module.exports = log2;
