Get bit [parity] of [32-bit integer] *([parallel method])*.
> For n-bit parity, use [@extra-integer/parity].

```javascript
const bitParity = require('@extra-integer/bit-parity');
// bitParity(integer)

bitParity(7);
// 1 (1,1,1 => 1)
bitParity(8);
// 1 (1,0,0,0 => 1)
bitParity(63);
// 0 (1,1,1,1,1,1 => 0)
```


[![extra-integer](https://i.imgur.com/toEbRv5.jpg)](https://www.npmjs.com/package/extra-integer)

[parity]: https://en.wikipedia.org/wiki/Parity_bit
[32-bit integer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators
[parallel method]: http://graphics.stanford.edu/~seander/bithacks.html#ParityParallel
[@extra-integer/parity]: https://www.npmjs.com/package/@extra-integer/parity
