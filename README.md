[32-bit integer] can store values from −2^31 to 2^31 − 1.<br>
📦 [Node.js](https://www.npmjs.com/package/extra-integer),
🌐 [Web](https://www.npmjs.com/package/extra-integer.web),
📜 [Files](https://unpkg.com/extra-integer/),
📰 [Docs](https://nodef.github.io/extra-integer/).
📘 [Wiki](https://github.com/nodef/extra-integer/wiki/).

This package is available in *Node.js* and *Web* formats. The web format
is exposed as `extra_integer` standalone variable and can be loaded from
[jsDelivr CDN].

> Stability: [Experimental](https://www.youtube.com/watch?v=L1j93RnIxEo).

[jsDelivr CDN]: https://cdn.jsdelivr.net/npm/extra-integer.web/index.js

<br>

```javascript
const integer = require("extra-integer");
// import * as integer from "extra-integer";
// import * as integer from "https://unpkg.com/extra-integer@2.0.30/index.mjs"; (deno)

integer.is(9.11e-31);
// false

integer.log10(10000);
// 4

integer.nextPow2(63);
// 64
```

<br>
<br>


## Index

| Property | Description |
|  ----  |  ----  |
| [MIN_VALUE] | Minimum int32 value. |
| [MAX_VALUE] | Maximum int32 value. |
| [is] | Check if value is int32. |
| [signEqual] | Check if two values have equal sign. |
| [abs] | Get absolute value. |
| [isPow2] | Check if value is a power-of-2. |
| [prevPow2] | Find previous power-of-2 of value. |
| [nextPow2] | Find next power-of-2 of value. |
| [pow2] | Find power-of-2 of value. |
| [pow10] | Finds power-of-10 of value. |
| [log2] | Find log-base-2 of value. |
| [log10] | Find log-base-10 of value. |

<br>
<br>

[![](https://img.youtube.com/vi/EK32jo7i5LQ/maxresdefault.jpg)](https://www.youtube.com/watch?v=EK32jo7i5LQ)

[32-bit integer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators
[bit twiddling hacks]: https://graphics.stanford.edu/~seander/bithacks.html
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
