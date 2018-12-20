function signExtend(a, n) {
  n = 32-n;
  return (a<<n)>>n;
};
module.exports = signExtend;
