Merge bits from two [32-bit integers], according to mask *([xor method])*.

```javascript
const bitMerge = require('@extra-integer/bit-merge');
// bitMerge(<integer-1>, <integer-2>, <mask>)

bitMerge(0x12, 0x24, 0x0F);
// 20 (0x14)
bitMerge(0x1234, 0xABCD, 0x0F0F);
// 6973 (0x1B3D)
bitMerge(0xAAAA, 0xBBBB, 0x3333);
// 48059 (0xBBBB)
```


[![extra-integer](https://i.imgur.com/toEbRv5.jpg)](https://www.npmjs.com/package/extra-integer)

[32-bit integers]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators
[xor method]: http://graphics.stanford.edu/~seander/bithacks.html#MaskedMerge
