import nextPow2 from './nextPow2';

/**
 * Gets previous power-of-2.
 * @param x an int32
 */
function prevPow2(x: number): number {
  return nextPow2(x+1)>>>1;
}
export default prevPow2;
