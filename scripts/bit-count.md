Count bits set in [32-bit integer] *([parallel method])*.

```javascript
const bitCount = require('@extra-integer/bit-count');
// bitCount(integer)

bitCount(7);
// 3 (111 => 3)
bitCount(12);
// 2 (1100 => 2)
bitCount(63);
// 6 (111111 => 6)
```


[![extra-integer](https://i.imgur.com/toEbRv5.jpg)](https://www.npmjs.com/package/extra-integer)

[32-bit integer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators
[parallel method]: http://graphics.stanford.edu/~seander/bithacks.html#CountBitsSetParallel
