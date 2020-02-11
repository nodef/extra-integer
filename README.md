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
| [MIN_VALUE]         | Checks if value is boolean.
| [MAX_VALUE]         | Reads a text, and converts it to a boolean value.
| [is]                | Gets exclusive-or of 2 boolean values.
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

[![nodef](https://merferry.glitch.me/card/extra-boolean.svg)](https://nodef.github.io)

[is]: https://github.com/nodef/extra-boolean/wiki/is
[parse]: https://github.com/nodef/extra-boolean/wiki/parse
[xor]: https://github.com/nodef/extra-boolean/wiki/xor
[imp]: https://github.com/nodef/extra-boolean/wiki/imp
[eqv]: https://github.com/nodef/extra-boolean/wiki/eqv
[32-bit integer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators
[bit twiddling hacks]: https://graphics.stanford.edu/~seander/bithacks.html
