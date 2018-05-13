function abs(a) {
  var m = a>>31;
  return (a+m)^m;
};
function bitCount(a) {
  a = a - ((a>>>1) & 0x55555555);
  a = (a & 0x33333333) + ((a>>>2) & 0x33333333);
  return ((a + (a>>>4) & 0x0F0F0F0F) * 0x01010101)>>>24;
};
function bitInterleave(a, b) {
  a = (a | (a<<8)) & 0x00FF00FF;
  a = (a | (a<<4)) & 0x0F0F0F0F;
  a = (a | (a<<2)) & 0x33333333;
  a = (a | (a<<1)) & 0x55555555;
  b = (b | (b<<8)) & 0x00FF00FF;
  b = (b | (b<<4)) & 0x0F0F0F0F;
  b = (b | (b<<2)) & 0x33333333;
  b = (b | (b<<1)) & 0x55555555;
  return b | (a<<1);
};
function bitMerge(a, b, m) {
  return a ^ ((a^b) & m);
};
function bitParity(a) {
  a ^= a>>>16;
  a ^= a>>>8;
  a ^= a>>>4;
  a &= 0xF;
  return (0x6996>>>a) & 1;
};
function bitReverse(a) {
  a = ((a>>>1) & 0x55555555) | ((a & 0x55555555)<<1);
  a = ((a>>>2) & 0x33333333) | ((a & 0x33333333)<<2);
  a = ((a>>>4) & 0x0F0F0F0F) | ((a & 0x0F0F0F0F)<<4);
  a = ((a>>>8) & 0x00FF00FF) | ((a & 0x00FF00FF)<<8);
  return (a>>>16) | (a<<16);
};
const MOD37_POS32 = [
  32, 0, 1, 26, 2, 23, 27, 0, 3, 16, 24, 30, 28, 11, 0, 13, 4, 7, 17, 0,
  25, 22, 31, 15, 29, 10, 12, 6, 0, 21, 14, 9, 5, 20, 8, 19, 18
];
function bitScan(a) {
  return MOD37_POS32[(-a & a) % 37];
};
function bitSetIf(a, m, f=1) {
  return (a & ~m) | (-f & m);
};
function bitSwap(a, i, j, n=1) {
  var x = ((a>>>i)^(a>>>j)) & ((1<<n)-1);
  return a ^ ((x<<i)|(x<<j));
};
function is(a) {
  return typeof a==='number' && isFinite(a) && (a|0)===a;
};
function isPow2(a) {
  return (a & (a-1))===0;
};
const POW10_VAL32 = [1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000];
function log10(a) {
  var z = ((log2(a)+1)*1233)>>>12;
  return z-(a<POW10_VAL32[z]? 1:0);
};
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
const MAX_VALUE = 2147483647|0;
const MIN_VALUE = -2147483648|0;
function nextPow2(a) {
  a--;
  a |= a>>>1;
  a |= a>>>2;
  a |= a>>>4;
  a |= a>>>8;
  a |= a>>>16;
  return a+1;
};
function parity(a, n=1) {
  var m = (1<<n)-1, z = 0|0;
  while(a) {
    z ^= a&m;
    a >>>= n;
  }
  return z;
};
const POW10_VAL64 = [
  1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000, 10000000000, 100000000000,
  1000000000000, 10000000000000, 100000000000000, 1000000000000000, 10000000000000000, 100000000000000000, 1000000000000000000
];
function pow10(a) {
  return POW10_VAL64[a];
};
function pow2(a) {
  return 1<<a;
};
function signEqual(a, b) {
  return (a^b)>=0;
};
function signExtend(a, n) {
  n = 32-n;
  return (a<<n)>>n;
};
exports.abs = abs;
exports.bitCount = bitCount;
exports.bitInterleave = bitInterleave;
exports.bitMerge = bitMerge;
exports.bitParity = bitParity;
exports.bitReverse = bitReverse;
exports.bitScan = bitScan;
exports.bitSetIf = bitSetIf;
exports.bitSwap = bitSwap;
exports.is = is;
exports.isPow2 = isPow2;
exports.log10 = log10;
exports.log2 = log2;
exports.MAX_VALUE = MAX_VALUE;
exports.MIN_VALUE = MIN_VALUE;
exports.nextPow2 = nextPow2;
exports.parity = parity;
exports.pow10 = pow10;
exports.pow2 = pow2;
exports.signEqual = signEqual;
exports.signExtend = signExtend;
