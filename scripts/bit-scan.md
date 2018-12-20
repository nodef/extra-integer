Get [position] of first set bit from left of [32-bit integer] *([mod37 method])*.

```javascript
const bitScan = require('@extra-integer/bit-scan');
// bitScan(integer)

bitScan(7);
// 0 (111 => 0)
bitScan(12);
// 2 (1100 => 2)
bitScan(64);
// 6 (1000000 => 6)
```


[![extra-integer](https://i.imgur.com/toEbRv5.jpg)](https://www.npmjs.com/package/extra-integer)

[position]: https://en.wikipedia.org/wiki/Bit_numbering#LSB_0_bit_numbering
[32-bit integer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators
[mod37 method]: http://graphics.stanford.edu/~seander/bithacks.html#ZerosOnRightModLookup
