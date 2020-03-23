[32-bit integer] can store values from −2^31 to 2^31 − 1.
This package includes a number of very interesting [bit twiddling hacks] for
integers by Sean Eron Anderson and many others.

```javascript
const integer = require('extra-integer');

integer.is(9.11e-31);
// false

integer.log10(10000);
// 4

integer.nextPow2(63);
// 64
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
[32-bit integer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators
[bit twiddling hacks]: https://graphics.stanford.edu/~seander/bithacks.html
[extra-integer.min]: https://www.npmjs.com/package/extra-integer.min
