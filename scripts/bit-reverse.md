Reverse all bits of [32-bit integer] *([parallel method])*.

```javascript
const bitReverse = require('@extra-integer/bit-reverse');
// bitReverse(<integer>)

bitReverse(0xFFFF0000);
// 65535 (0xFFFF0000 => 0x0000FFFF)
bitReverse(0x00AABBCC);
// 870143232 (0x00AABBCC => 0x33DD5500)
bitReverse(0x1234);
// 742916096 (0x00001234 => 0x2C480000)
```


[![extra-integer](https://i.imgur.com/toEbRv5.jpg)](https://www.npmjs.com/package/extra-integer)

[32-bit integer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators
[parallel method]: http://graphics.stanford.edu/~seander/bithacks.html#ReverseParallel
