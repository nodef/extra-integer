function is(a) {
  return typeof a==='number' && isFinite(a) && (a|0)===a;
};
module.exports = is;
