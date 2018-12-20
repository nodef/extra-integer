function bitSetIf(a, m, f=1) {
  return (a & ~m) | (-f & m);
};
module.exports = bitSetIf;
