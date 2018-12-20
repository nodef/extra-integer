Interleave bits of two 16-bit integers to from [32-bit integer] *([binary magic method])*.

```javascript
const bitInterleave = require('@extra-integer/bit-interleave');
// bitInterleave(integer1, integer2)

bitInterleave(0x0000, 0xFFFF);
// 1431655765 (0x55555555)
bitInterleave(0x1234, 0x1234);
// 51121968 (0x030C0F30)
bitInterleave(0x1234, 0x4321);
// 302845473 (0x120D0E21)
```


[![extra-integer](https://i.imgur.com/toEbRv5.jpg)](https://www.npmjs.com/package/extra-integer)

[32-bit integer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators
[binary magic method]: http://graphics.stanford.edu/~seander/bithacks.html#InterleaveBMN
