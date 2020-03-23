/**
 * Minimum int32 value.
 */
const MIN_VALUE = -2147483648|0;
/**
 * Maximum int32 value.
 */
const MAX_VALUE = 2147483647|0;
/**
 * Checks if value is int32.
 * @param {*} x a value
 * @returns {boolean}
 */
function is(x) {
  return typeof x==='number' && isFinite(x) && (x|0)===x;
}
/**
 * Gets absolute value (xor method).
 * @param {number} x an int32
 * @returns {number}
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
 * Gets log-base-2 (DeBruijn method).
 * @param {number} x an int32
 * @returns {number}
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
 * Gets log-base-10 (log2 method).
 * @param {number} x an int32
 * @returns {number}
 */
function log10(x) {
  var a = ((log2(x)+1)*1233)>>>12;
  return a-(x<POW10_VAL32[a]? 1:0);
}
/**
 * Gets power-of-2 (left-shift method).
 * @param {number} x an int32
 * @returns {number}
 */
function pow2(x) {
  return 1<<x;
}
/**
 * Gets power-of-10 (lookup method).
 * @param {number} x an int32
 * @returns {number}
 */
function pow10(x) {
  return x<0? 0:POW10_VAL32[x];
}
/**
 * Checks if value is a power-of-2 (decrement method).
 * @param {number} x an int32
 * @returns {boolean}
 */
function isPow2(x) {
  return (x & (x-1))===0;
}
/**
 * Gets next power-of-2 (bit-shift method).
 * @param {number} x an int32
 * @returns {number}
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
 * Checks if two values have equal sign (xor method).
 * @param {number} x first int32
 * @param {number} y second int32
 * @returns {boolean}
 */
function signEqual(x, y) {
  return (x^y)>=0;
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
