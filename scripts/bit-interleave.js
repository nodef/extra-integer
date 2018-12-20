function bitInterleave(a, b) {
  a = (a | (a<<8)) & 0x00FF00FF;
  a = (a | (a<<4)) & 0x0F0F0F0F;
  a = (a | (a<<2)) & 0x33333333;
  a = (a | (a<<1)) & 0x55555555;
  b = (b | (b<<8)) & 0x00FF00FF;
  b = (b | (b<<4)) & 0x0F0F0F0F;
  b = (b | (b<<2)) & 0x33333333;
  b = (b | (b<<1)) & 0x55555555;
  return b | (a<<1);
};
module.exports = bitInterleave;
