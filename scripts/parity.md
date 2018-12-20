Get n-bit [parity] of [32-bit integer].
> For 1-bit parity, [@extra-integer/bit-parity] is faster.

```javascript
const parity = require('@extra-integer/parity');
// parity(integer, [bits=1])

parity(7, 1);
// 1 (1,1,1 => 1)
parity(8, 2);
// 2 (10,00 => 10)
parity(63, 4);
// 12 (11,1111 => 1100)
```


[![extra-integer](https://i.imgur.com/toEbRv5.jpg)](https://www.npmjs.com/package/extra-integer)

[parity]: https://en.wikipedia.org/wiki/Parity_bit
[32-bit integer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators
[@extra-integer/bit-parity]: https://www.npmjs.com/package/@extra-integer/bit-parity
