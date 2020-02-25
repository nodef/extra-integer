[32-bit integer] can store values from −2^31 to 2^31 − 1.
Common integer and bitwise functions are included. Also includes a number of
very interesting [bit twiddling hacks] by Sean Eron Anderson and many others.

```javascript
const integer = require('extra-integer');

integer.is(9.11e-31);
// false

integer.log10(10000);
// 4

integer.nextPow2(63);
// 64

integer.bitSet(6, 0, 1);
// 7 (110,0,1 => 111)

integer.bitCount(12);
// 2 (1100 => 2)
```

### reference

| Name                | Action
|---------------------|-------
| [MIN_VALUE]         | Minimum 32-bit integer value.
| [MAX_VALUE]         | Maximum 32-bit integer value.
| [is]                | Checks if value is 32-bit integer.
| [abs]               | Gets absolute value of 32-bit integer (xor method).
| [log2]              | Gets log-base-2 of 32-bit integer (DeBruijn method).
| [log10]             | Gets log-base-10 of 32-bit integer (log2 method).
| [pow2]              | Gets power-of-2 of 32-bit integer (left-shift method).
| [pow10]             | Gets power-of-10 of 32-bit integer (lookup method).
| [isPow2]            | Checks if 32-bit integer is a power-of-2 (decrement method).
| [nextPow2]          | Gets next power-of-2 of 32-bit integer (bit-shift method).
| [signEqual]         | Checks if two 32-bit integers have equal sign (xor method).
| [signExtend]        | Sign extends variable bit-width integer to 32-bit integer.
| [parity]            | Gets n-bit parity of 32-bit integer.
| [bitGet]            | Gets a bit of 32-bit integer (right-shift method).
| [bitSet]            | Sets a bit of 32-bit integer (left-shift method).
| [bitSetAs]          | Sets bits of 32-bit integer, as per mask (not method).
| [bitSwap]           | Swaps bit sequences in 32-bit integer (xor method).
| [bitReverse]        | Reverses all bits of 32-bit integer (parallel method).
| [bitMerge]          | Merges bits from two 32-bit integers, as per mask (xor method).
| [bitInterleave]     | Interleaves bits of two 16-bit integers to form 32-bit integer (binary magic method).
| [bitScan]           | Gets index of first set bit from left of 32-bit integer (mod37 method).
| [bitCount]          | Counts bits set in 32-bit integer (parallel method).
| [bitParity]         | Gets bit parity of 32-bit integer (parallel method).

<br>
<br>

[![nodef](https://merferry.glitch.me/card/extra-integer.svg)](https://nodef.github.io)

> Browserified, minified version of this package is [extra-integer.min].

[MIN_VALUE]: https://github.com/nodef/extra-integer/wiki/MIN_VALUE
[MAX_VALUE]: https://github.com/nodef/extra-integer/wiki/MAX_VALUE
[is]: https://github.com/nodef/extra-integer/wiki/is
[abs]: https://github.com/nodef/extra-integer/wiki/abs
[log2]: https://github.com/nodef/extra-integer/wiki/log2
[log10]: https://github.com/nodef/extra-integer/wiki/log10
[pow2]: https://github.com/nodef/extra-integer/wiki/pow2
[pow10]: https://github.com/nodef/extra-integer/wiki/pow10
[isPow2]: https://github.com/nodef/extra-integer/wiki/isPow2
[nextPow2]: https://github.com/nodef/extra-integer/wiki/nextPow2
[signEqual]: https://github.com/nodef/extra-integer/wiki/signEqual
[signExtend]: https://github.com/nodef/extra-integer/wiki/signExtend
[parity]: https://github.com/nodef/extra-integer/wiki/parity
[bitGet]: https://github.com/nodef/extra-integer/wiki/bitGet
[bitSet]: https://github.com/nodef/extra-integer/wiki/bitSet
[bitSetAs]: https://github.com/nodef/extra-integer/wiki/bitSetAs
[bitSwap]: https://github.com/nodef/extra-integer/wiki/bitSwap
[bitReverse]: https://github.com/nodef/extra-integer/wiki/bitReverse
[bitMerge]: https://github.com/nodef/extra-integer/wiki/bitMerge
[bitInterleave]: https://github.com/nodef/extra-integer/wiki/bitInterleave
[bitScan]: https://github.com/nodef/extra-integer/wiki/bitScan
[bitCount]: https://github.com/nodef/extra-integer/wiki/bitCount
[bitParity]: https://github.com/nodef/extra-integer/wiki/bitParity
[32-bit integer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators
[bit twiddling hacks]: https://graphics.stanford.edu/~seander/bithacks.html
[extra-integer.min]: https://www.npmjs.com/package/extra-integer.min
