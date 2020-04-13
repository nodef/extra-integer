import POW10_VAL32 from './_POW10_VAL32';

/**
 * Gets power-of-10.
 * @param x an int32
 */
function pow10(x: number): number {
  return x<0? 0:POW10_VAL32[x];
}
export default pow10;
