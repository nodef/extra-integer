function bitParity(a) {
  a ^= a>>>16;
  a ^= a>>>8;
  a ^= a>>>4;
  a &= 0xF;
  return (0x6996>>>a) & 1;
};
module.exports = bitParity;
