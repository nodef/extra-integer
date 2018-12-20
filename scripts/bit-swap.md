Swap bit sequences in [32-bit integer] *([xor method])*.

```javascript
const bitSwap = require('@extra-integer/bit-swap');
// bitSwap(<integer>, <position-1>, <position-2>, [bits=1])

bitSwap(6, 1, 0);
// 5 (110 => 101)
bitSwap(0x1234, 8, 4, 4);
// 4900 (0x1234 => 0x1324)
bitSwap(0x4AAB, 8, 0, 8);
// 43850 (0x4AAB => 0xAB4A)
```


[![extra-integer](https://i.imgur.com/toEbRv5.jpg)](https://www.npmjs.com/package/extra-integer)

[32-bit integer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators
[xor method]: http://graphics.stanford.edu/~seander/bithacks.html#SwappingBitsXOR
