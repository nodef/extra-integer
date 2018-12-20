function bitSwap(a, i, j, n=1) {
  var x = ((a>>>i)^(a>>>j)) & ((1<<n)-1);
  return a ^ ((x<<i)|(x<<j));
};
module.exports = bitSwap;
