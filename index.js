/**
 * Maximum 32-bit integer value.
 */
const MAX_VALUE = 2147483647|0;

/**
 * Minimum 32-bit integer value.
 */
const MIN_VALUE = -2147483648|0;



/**
 * Checks if value is 32-bit integer.
 * @param {*} x a value
 * @returns {boolean} true if 32-bit integer
 */
function is(x) {
  return typeof x==='number' && isFinite(x) && (x|0)===x;
}

/**
 * Gets absolute value of 32-bit integer (xor method).
 * @param {Int32} x a value
 */
function abs(x) {
  var m = x>>31;
  return (x+m)^m;
}

const DEBRUIJN_POS32 = [
  0,  9,  1, 10, 13, 21,  2, 29, 11, 14, 16, 18, 22, 25,  3, 30, 
  8, 12, 20, 28, 15, 17, 24,  7, 19, 27, 23,  6, 26,  5,  4, 31
];

/**
 * Gets log-base-2 of 32-bit integer (DeBruijn method).
 * @param {Int32} x a value
 */
function log2(x) {
  x |= x>>>1;
  x |= x>>>2;
  x |= x>>>4;
  x |= x>>>8;
  x |= x>>>16;
  return DEBRUIJN_POS32[(x*0x07C4ACDD)>>>27];
}

const POW10_VAL32 = [
  1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000
];

/**
 * Gets log-base-10 of 32-bit integer (log2 method).
 * @param {Int32} x a value
 */
function log10(x) {
  var a = ((log2(x)+1)*1233)>>>12;
  return a-(x<POW10_VAL32[a]? 1:0);
}

/**
 * Gets power-of-2 of 32-bit integer (left-shift method).
 * @param {Int32} x a value
 */
function pow2(x) {
  return 1<<x;
}

/**
 * Gets power-of-10 of 32-bit integer (lookup method).
 * @param {Int32} x a value
 */
function pow10(x) {
  return x<0? 0:POW10_VAL32[x];
}

/**
 * Checks if 32-bit integer is a power-of-2 (decrement method).
 * @param {Int32} x a value
 */
function isPow2(x) {
  return (x & (x-1))===0;
}

/**
 * Gets next power-of-2 of 32-bit integer (bit-shift method).
 * @param {Int32} x a value
 */
function nextPow2(x) {
  x--;
  x |= x>>>1;
  x |= x>>>2;
  x |= x>>>4;
  x |= x>>>8;
  x |= x>>>16;
  return x+1;
}

/**
 * Checks if two 32-bit integers have equal sign (xor method).
 * @param {Int32} x first value
 * @param {Int32} y second value
 */
function signEqual(x, y) {
  return (x^y)>=0;
}

/**
 * Sign extends variable bit-width integer to 32-bit integer.
 * @param {Int32} x variable bit-width integer
 * @param {Int32} n bit width
 */
function signExtend(x, n) {
  n = 32-n;
  return (x<<n)>>n;
}

/**
 * Gets n-bit parity of 32-bit integer.
 * @param {Int32} x a value
 * @param {Int32} n number of bits (1)
 */
function parity(x, n=1) {
  var m = (1<<n)-1, a = 0|0;
  while(x) {
    a ^= x&m;
    x >>>= n;
  }
  return a;
}



/**
 * Gets a bit of 32-bit integer (right-shift method).
 * @param {Int32} x a value
 * @param {Int32} i bit index
 */
function bitGet(x, i) {
  return (x>>>i) & 1;
}

/**
 * Sets a bit of 32-bit integer (left-shift method).
 * @param {Int32} x a value
 * @param {Int32} i bit index
 * @param {Int32} f bit value (1)
 */
function bitSet(x, i, f=1) {
  return (x & ~(1<<i)) | (f<<i);
}

/**
 * Sets bits of 32-bit integer, as per mask (not method).
 * @param {Int32} x a value
 * @param {Int32} m bit mask
 * @param {Int32} f bit value (1)
 */
function bitSetAs(x, m, f=1) {
  return (x & ~m) | (-f & m);
}

/**
 * Swaps bit sequences in 32-bit integer (xor method).
 * @param {Int32} x a value
 * @param {Int32} i first bit index
 * @param {Int32} j second bit index
 * @param {Int32} n bit width
 */
function bitSwap(x, i, j, n=1) {
  var x = ((x>>>i)^(x>>>j)) & ((1<<n)-1);
  return x ^ ((x<<i)|(x<<j));
}

/**
 * Reverses all bits of 32-bit integer (parallel method).
 * @param {Int32} x a value
 */
function bitReverse(x) {
  x = ((x>>>1) & 0x55555555) | ((x & 0x55555555)<<1);
  x = ((x>>>2) & 0x33333333) | ((x & 0x33333333)<<2);
  x = ((x>>>4) & 0x0F0F0F0F) | ((x & 0x0F0F0F0F)<<4);
  x = ((x>>>8) & 0x00FF00FF) | ((x & 0x00FF00FF)<<8);
  return (x>>>16) | (x<<16);
}

/**
 * Merges bits from two 32-bit integers, as per mask (xor method).
 * @param {Int32} x first value
 * @param {Int32} y second value
 * @param {Int32} m bit mask
 */
function bitMerge(x, y, m) {
  return x ^ ((x^y) & m);
}

/**
 * Interleaves bits of two 16-bit integers to form 32-bit integer (binary magic method).
 * @param {Int32} x first 16-bit value
 * @param {Int32} y second 16-bit value
 */
function bitInterleave(x, y) {
  x = (x | (x<<8)) & 0x00FF00FF;
  x = (x | (x<<4)) & 0x0F0F0F0F;
  x = (x | (x<<2)) & 0x33333333;
  x = (x | (x<<1)) & 0x55555555;
  y = (y | (y<<8)) & 0x00FF00FF;
  y = (y | (y<<4)) & 0x0F0F0F0F;
  y = (y | (y<<2)) & 0x33333333;
  y = (y | (y<<1)) & 0x55555555;
  return y | (x<<1);
}

const MOD37_POS32 = [
  32, 0, 1, 26, 2, 23, 27, 0, 3, 16, 24, 30, 28, 11, 0, 13, 4, 7, 17, 0,
  25, 22, 31, 15, 29, 10, 12, 6, 0, 21, 14, 9, 5, 20, 8, 19, 18
];

/**
 * Gets position of first set bit from left of 32-bit integer (mod37 method).
 * @param {Int32} x a value
 */
function bitScan(x) {
  return MOD37_POS32[(-x & x) % 37];
}

/**
 * Counts bits set in 32-bit integer (parallel method).
 * @param {Int32} x a value
 */
function bitCount(x) {
  x = x - ((x>>>1) & 0x55555555);
  x = (x & 0x33333333) + ((x>>>2) & 0x33333333);
  return ((x + (x>>>4) & 0x0F0F0F0F) * 0x01010101)>>>24;
}

/**
 * Gets bit parity of 32-bit integer (parallel method).
 * @param {Int32} x a value
 */
function bitParity(x) {
  x ^= x>>>16;
  x ^= x>>>8;
  x ^= x>>>4;
  x &= 0xF;
  return (0x6996>>>x) & 1;
}
exports.MIN_VALUE = MIN_VALUE;
exports.MAX_VALUE = MAX_VALUE;
exports.is = is;
exports.abs = abs;
exports.log2 = log2;
exports.log10 = log10;
exports.pow2 = pow2;
exports.pow10 = pow10;
exports.isPow2 = isPow2;
exports.nextPow2 = nextPow2;
exports.signEqual = signEqual;
exports.signExtend = signExtend;
exports.parity = parity;
exports.bitGet = bitGet;
exports.bitSet = bitSet;
exports.bitSetAs = bitSetAs;
exports.bitSwap = bitSwap;
exports.bitReverse = bitReverse;
exports.bitMerge = bitMerge;
exports.bitInterleave = bitInterleave;
exports.bitScan = bitScan;
exports.bitCount = bitCount;
exports.bitParity = bitParity;
