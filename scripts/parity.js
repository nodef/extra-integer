function parity(a, n=1) {
  var m = (1<<n)-1, z = 0|0;
  while(a) {
    z ^= a&m;
    a >>>= n;
  }
  return z;
};
module.exports = parity;
