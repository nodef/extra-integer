Common operations for 32-bit integers.<br>
📦 [Node.js](https://www.npmjs.com/package/extra-integer),
🌐 [Web](https://www.npmjs.com/package/extra-integer.web),
📜 [Files](https://unpkg.com/extra-integer/),
📰 [Docs](https://nodef.github.io/extra-integer/).
📘 [Wiki](https://github.com/nodef/extra-integer/wiki/).

A [32-bit integer] can store values from −2^31 ([MIN_VALUE]) to 2^31 − 1
([MAX_VALUE]). JavaScript converts a `Number` (a *64-bit floating point number*)
to a *32-bit* *integer* (`int32`) when bitwise operators (such as `|`) are
applied. Use [is] to check is a number can be represented as a *32-bit integer*.
**Sign**-based operations include [signEqual] and [abs]. **Power/logarithm**
related operations include [isPow2], [prevPow2], [nextPow2], [pow2], [pow10],
[log2], and [log10].

This package is available in *Node.js* and *Web* formats. The web format
is exposed as `extra_integer` standalone variable and can be loaded from
[jsDelivr CDN].

> Stability: [Experimental](https://www.youtube.com/watch?v=L1j93RnIxEo).

[32-bit integer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators
[jsDelivr CDN]: https://cdn.jsdelivr.net/npm/extra-integer.web/index.js

<br>

```javascript
const integer = require('extra-integer');
// import * as integer from "extra-integer";
// import * as integer from "https://unpkg.com/extra-integer/index.mjs"; (deno)

integer.is(9.11e-31);
// → false

integer.log10(10000);
// → 4

integer.nextPow2(63);
// → 64
```

<br>
<br>


## Index

| Property | Description |
|  ----  |  ----  |
| [MIN_VALUE] | Minimum int32 value. |
| [MAX_VALUE] | Maximum int32 value. |
|   |   |
| [is] | Check if value is int32. |
|   |   |
| [signEqual] | Check if two values have equal sign. |
| [abs] | Get absolute value. |
|   |   |
| [isPow2] | Check if value is a power-of-2. |
| [prevPow2] | Find previous power-of-2 of value. |
| [nextPow2] | Find next power-of-2 of value. |
| [pow2] | Find power-of-2 of value. |
| [pow10] | Find power-of-10 of value. |
| [log2] | Find log-base-2 of value. |
| [log10] | Find log-base-10 of value. |

<br>
<br>


## References

- [Bit Twiddling Hacks by Sean Eron Anderson](https://graphics.stanford.edu/~seander/bithacks.html)


<br>
<br>


[![](https://img.youtube.com/vi/EK32jo7i5LQ/maxresdefault.jpg)](https://www.youtube.com/watch?v=EK32jo7i5LQ)


[MIN_VALUE]: https://nodef.github.io/extra-integer/modules.html#MIN_VALUE
[MAX_VALUE]: https://nodef.github.io/extra-integer/modules.html#MAX_VALUE
[is]: https://nodef.github.io/extra-integer/modules.html#is
[signEqual]: https://nodef.github.io/extra-integer/modules.html#signEqual
[abs]: https://nodef.github.io/extra-integer/modules.html#abs
[isPow2]: https://nodef.github.io/extra-integer/modules.html#isPow2
[prevPow2]: https://nodef.github.io/extra-integer/modules.html#prevPow2
[nextPow2]: https://nodef.github.io/extra-integer/modules.html#nextPow2
[pow2]: https://nodef.github.io/extra-integer/modules.html#pow2
[pow10]: https://nodef.github.io/extra-integer/modules.html#pow10
[log2]: https://nodef.github.io/extra-integer/modules.html#log2
[log10]: https://nodef.github.io/extra-integer/modules.html#log10
