[32-bit integer] can store values from −2^31 to 2^31 − 1. [:running:] [:vhs:] [:package:] [:moon:] [:ledger:]

Methods as separate packages:
- `@extra-integer/log2`: use [rollup] to bundle this es module.
- `@extra-integer/log2.min`: use in browser ([browserify], [uglify-js]).

This package includes [bit twiddling hacks], for integers, by Sean Eron Anderson
and many others.

> Stability: Experimental

```javascript
const integer = require('extra-integer');
// import * as integer from 'extra-integer';
// import * as integer from 'https://unpkg.com/extra-integer@2.0.26/index.mjs'; (deno)

integer.is(9.11e-31);
// false

integer.log10(10000);
// 4

integer.nextPow2(63);
// 64
```

### reference

| Method              | Action
|---------------------|-------
| [MIN_VALUE]         | Minimum int32 value.
| [MAX_VALUE]         | Maximum int32 value.
| [is]                | Checks if value is int32.
| [abs]               | Gets absolute value.
| [log2]              | Gets log-base-2.
| [log10]             | Gets log-base-10.
| [pow2]              | Gets power-of-2.
| [pow10]             | Gets power-of-10.
| [isPow2]            | Checks if value is a power-of-2.
| [nextPow2]          | Gets next power-of-2.
| [signEqual]         | Checks if two values have equal sign.

<br>

[![nodef](https://merferry.glitch.me/card/extra-integer.svg)](https://nodef.github.io)

[32-bit integer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators
[bit twiddling hacks]: https://graphics.stanford.edu/~seander/bithacks.html
[browserify]: https://www.npmjs.com/package/browserify
[rollup]: https://www.npmjs.com/package/rollup
[uglify-js]: https://www.npmjs.com/package/uglify-js
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
[:running:]: https://npm.runkit.com/extra-integer
[:package:]: https://www.npmjs.com/package/extra-integer
[:moon:]: https://www.npmjs.com/package/extra-integer.min
[:vhs:]: https://asciinema.org/a/319556
[:ledger:]: https://unpkg.com/extra-integer/
