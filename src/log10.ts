import log2 from './log2';
import POW10_VAL32 from './_POW10_VAL32';

/**
 * Gets log-base-10 (log2 method).
 * @param x an int32
 */
function log10(x: number): number {
  var a = ((log2(x)+1)*1233)>>>12;
  return a-(x<POW10_VAL32[a]? 1:0);
}
export default log10;
