Conditionally set or clear bits of [32-bit integer], without branching *([not method])*.

```javascript
const bitSetIf = require('@extra-integer/bit-set-if');
// bitSetIf(<integer>, <mask>, [flag=1])

bitSetIf(8, 2, 1);
// 10 (0x8 set 0x2 => 0xA)
bitSetIf(15, 3, 0);
// 12 (0xF clear 0x3 => 0xC)
bitSetIf(0x1234, 0x430, 1);
// 5684 (0x1234 set 0x430 => 0x1634)
```


[![extra-integer](https://i.imgur.com/toEbRv5.jpg)](https://www.npmjs.com/package/extra-integer)

[32-bit integer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators
[not method]: http://graphics.stanford.edu/~seander/bithacks.html#ConditionalSetOrClearBitsWithoutBranching
