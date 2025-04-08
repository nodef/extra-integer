A [32-bit integer] can store values from `-2^31` to `2^31 - 1`.<br>
📦 [Node.js](https://www.npmjs.com/package/extra-integer),
🌐 [Web](https://www.npmjs.com/package/extra-integer.web),
📜 [Files](https://unpkg.com/extra-integer/),
📰 [Docs](https://nodef.github.io/extra-integer/),
📘 [Wiki](https://github.com/nodef/extra-integer/wiki/).

This package deals with the manipulation of **32-bit integers** in JavaScript,
which can store values ranging from `-2^31` ([MIN_VALUE]) to `2^31 - 1`
([MAX_VALUE]). JavaScript converts a `Number` (a *64-bit floating point number*)
to a *32-bit integer* (`int32`) when bitwise operators (such as `|`) are
applied.

Use [is] to check is a number can be represented as a *32-bit integer*.
**Sign**-based operations include [abs] and [signEqual]. **Power/logarithm**
related operations include [isPow2], [prevPow2], [nextPow2], [pow2], [pow10],
[log2], and [log10].

This package is available in *Node.js* and *Web* formats. To use it on the web,
simply use the `extra_integer` global variable after loading with a `<script>`
tag from the [jsDelivr CDN].

> Stability: [Experimental](https://www.youtube.com/watch?v=L1j93RnIxEo).

[32-bit integer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators
[jsDelivr CDN]: https://cdn.jsdelivr.net/npm/extra-integer.web/index.js

<br>

```javascript
const xinteger = require('extra-integer');
// import * as xinteger from "extra-integer";
// import * as xinteger from "https://unpkg.com/extra-integer/index.mjs"; (deno)

xinteger.is(9.11e-31);
// → false

xinteger.log10(10000);
// → 4

xinteger.nextPow2(63);
// → 64
```

<br>
<br>


## Index

| Property | Description |
|  ----  |  ----  |
| [MIN_VALUE] | Minimum int32 value. |
| [MAX_VALUE] | Maximum int32 value. |
|  |  |
| [is] | Check if value is int32. |
|  |  |
| [abs] | Get the absolute of an int32. |
| [signEqual] | Check if two int32s have equal sign. |
|  |  |
| [isPow2] | Check if int32 is a power-of-2. |
| [prevPow2] | Find previous power-of-2 of an int32. |
| [nextPow2] | Find next power-of-2 of an int32. |
| [pow2] | Find the power-of-2 of an int32. |
| [pow10] | Find the power-of-10 of an int32. |
| [log2] | Find the base-2 logarithm of an int32. |
| [log10] | Find the base-10 logarithm of an int32. |

<br>
<br>


## References

- [Bit Twiddling Hacks by Sean Eron Anderson](https://graphics.stanford.edu/~seander/bithacks.html)
- [bit-twiddle package by @mikolalysenko](https://www.npmjs.com/package/bit-twiddle)


<br>
<br>


[![](https://img.youtube.com/vi/EK32jo7i5LQ/maxresdefault.jpg)](https://www.youtube.com/watch?v=EK32jo7i5LQ)<br>
[![ORG](https://img.shields.io/badge/org-nodef-green?logo=Org)](https://nodef.github.io)
[![DOI](https://zenodo.org/badge/133167597.svg)](https://zenodo.org/badge/latestdoi/133167597)
[![Coverage Status](https://coveralls.io/repos/github/nodef/extra-integer/badge.svg?branch=master)](https://coveralls.io/github/nodef/extra-integer?branch=master)
[![Test Coverage](https://api.codeclimate.com/v1/badges/d9c12df80ca4add5422e/test_coverage)](https://codeclimate.com/github/nodef/extra-integer/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/d9c12df80ca4add5422e/maintainability)](https://codeclimate.com/github/nodef/extra-integer/maintainability)
![](https://ga-beacon.deno.dev/G-RC63DPBH3P:SH3Eq-NoQ9mwgYeHWxu7cw/github.com/nodef/extra-integer)


[MIN_VALUE]: https://github.com/nodef/extra-integer/wiki/MIN_VALUE
[MAX_VALUE]: https://github.com/nodef/extra-integer/wiki/MAX_VALUE
[is]: https://github.com/nodef/extra-integer/wiki/is
[signEqual]: https://github.com/nodef/extra-integer/wiki/signEqual
[abs]: https://github.com/nodef/extra-integer/wiki/abs
[isPow2]: https://github.com/nodef/extra-integer/wiki/isPow2
[prevPow2]: https://github.com/nodef/extra-integer/wiki/prevPow2
[nextPow2]: https://github.com/nodef/extra-integer/wiki/nextPow2
[pow2]: https://github.com/nodef/extra-integer/wiki/pow2
[pow10]: https://github.com/nodef/extra-integer/wiki/pow10
[log2]: https://github.com/nodef/extra-integer/wiki/log2
[log10]: https://github.com/nodef/extra-integer/wiki/log10
