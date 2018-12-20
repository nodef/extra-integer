function bitMerge(a, b, m) {
  return a ^ ((a^b) & m);
};
module.exports = bitMerge;
