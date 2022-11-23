// CONSTANTS
// =========

/** Minimum int32 value. */
export const MIN_VALUE: number = -2147483648|0;
/** Maximum int32 value. */
export const MAX_VALUE: number = 2147483647|0;




// METHODS
// =======

// ABOUT
// -----

/**
 * Check if value is int32.
 * @param v a value
 * @returns is int32?
 */
export function is(v: any): boolean {
  return typeof v==="number" && isFinite(v) && (v|0)===v;
}




// SIGN
// ----

/**
 * Get the absolute of an int32.
 * @param x an int32
 * @returns +ve value
 */
 export function abs(x: number): number {
  var m = x>>31;
  return (x+m)^m;
}
// - https://graphics.stanford.edu/~seander/bithacks.html#IntegerAbs
// - https://www.npmjs.com/package/bit-twiddle


/**
 * Check if two int32s have equal sign.
 * @param x an int32
 * @param y another int32
 * @returns are signs equal?
 */
export function signEqual(x: number, y: number): boolean {
  return (x^y)>=0;
}
// - https://graphics.stanford.edu/~seander/bithacks.html#DetectOppositeSigns




// POWER / LOGARITHM
// -----------------

/**
 * Check if int32 is a power-of-2.
 * @param x an int32
 * @returns is power-of-2?
 */
export function isPow2(x: number): boolean {
  return (x & (x-1))===0;
}
// - https://graphics.stanford.edu/~seander/bithacks.html#DetermineIfPowerOf2
// - https://www.npmjs.com/package/bit-twiddle


/**
 * Find previous power-of-2 of an int32.
 * @param x an int32
 * @returns 2ᵃ | 2ᵃ < x and 2ᵃ ≥ x/2
 */
export function prevPow2(x: number): number {
  return nextPow2(x+1)>>>1;
}
// - https://graphics.stanford.edu/~seander/bithacks.html#RoundUpPowerOf2
// - https://www.npmjs.com/package/bit-twiddle


/**
 * Find next power-of-2 of an int32.
 * @param x an int32
 * @returns 2ᵃ | 2ᵃ > x and 2ᵃ ≤ 2x
 */
export function nextPow2(x: number): number {
  x--;
  x |= x>>>1;
  x |= x>>>2;
  x |= x>>>4;
  x |= x>>>8;
  x |= x>>>16;
  return x+1;
}
// - https://graphics.stanford.edu/~seander/bithacks.html#RoundUpPowerOf2
// - https://www.npmjs.com/package/bit-twiddle


/**
 * Find the power-of-2 of an int32.
 * @param x an int32
 * @returns 2ˣ
 */
export function pow2(x: number): number {
  return 1<<x;
}
// - https://graphics.stanford.edu/~seander/bithacks.html


const POW10_VAL32: number[] = [
  1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000
];

/**
 * Find the power-of-10 of an int32.
 * @param x an int32
 * @returns 10ˣ
 */
export function pow10(x: number): number {
  return x<0? 0:POW10_VAL32[x];
}
// - https://graphics.stanford.edu/~seander/bithacks.html


const DEBRUIJN_POS32: number[] = [
  0,  9,  1, 10, 13, 21,  2, 29, 11, 14, 16, 18, 22, 25,  3, 30,
  8, 12, 20, 28, 15, 17, 24,  7, 19, 27, 23,  6, 26,  5,  4, 31
];

/**
 * Find the base-2 logarithm of an int32.
 * @param x an int32
 * @returns log₂(x)
 */
export function log2(x: number): number {
  x |= x>>>1;
  x |= x>>>2;
  x |= x>>>4;
  x |= x>>>8;
  x |= x>>>16;
  return DEBRUIJN_POS32[(x*0x07C4ACDD)>>>27];
}
// - https://graphics.stanford.edu/~seander/bithacks.html#IntegerLogDeBruijn
// - https://www.npmjs.com/package/bit-twiddle


/**
 * Find the base-10 logarithm of an int32.
 * @param x an int32
 * @returns log₁₀(x)
 */
export function log10(x: number): number {
  var a = ((log2(x) + 1)*1233) >>> 12;
  return a - (x<POW10_VAL32[a]? 1:0);
}
// - https://graphics.stanford.edu/~seander/bithacks.html#IntegerLog10
// - https://www.npmjs.com/package/bit-twiddle
