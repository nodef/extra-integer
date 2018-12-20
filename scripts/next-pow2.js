function nextPow2(a) {
  a--;
  a |= a>>>1;
  a |= a>>>2;
  a |= a>>>4;
  a |= a>>>8;
  a |= a>>>16;
  return a+1;
};
module.exports = nextPow2;
