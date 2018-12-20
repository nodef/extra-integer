function isPow2(a) {
  return (a & (a-1))===0;
};
module.exports = isPow2;
