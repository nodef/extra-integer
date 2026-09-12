A [32-bit integer] can store values from `-2^31` to `2^31 - 1`.<br>

▌
📦 [JSR](https://jsr.io/@nodef/extra-integer),
📦 [NPM](https://www.npmjs.com/package/extra-integer),
📰 [Docs](https://jsr.io/@nodef/extra-integer/doc).

This package deals with the manipulation of **32-bit integers** in JavaScript,
which can store values ranging from `-2^31` ([MIN_VALUE]) to `2^31 - 1`
([MAX_VALUE]). JavaScript converts a `Number` (a *64-bit floating point number*)
to a *32-bit integer* (`int32`) when bitwise operators (such as `|`) are
applied.

Use [is] to check is a number can be represented as a *32-bit integer*.
**Sign**-based operations include [abs] and [signEqual]. **Power/logarithm**
related operations include [isPow2], [prevPow2], [nextPow2], [pow2], [pow10],
[log2], and [log10].

[32-bit integer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators

<br>

```javascript
import * as xinteger from "jsr:@nodef/extra-integer";

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


[![](https://raw.githubusercontent.com/qb40/designs/gh-pages/0/image/11.png)](https://wolfram77.github.io)<br>
[![ORG](https://img.shields.io/badge/org-nodef-green?logo=Org)](https://nodef.github.io)
![](https://ga-beacon.deno.dev/G-RC63DPBH3P:SH3Eq-NoQ9mwgYeHWxu7cw/github.com/nodef/extra-integer)


[MIN_VALUE]: https://jsr.io/@nodef/extra-version/doc/~/MIN_VALUE
[MAX_VALUE]: https://jsr.io/@nodef/extra-version/doc/~/MAX_VALUE
[is]: https://jsr.io/@nodef/extra-version/doc/~/is
[signEqual]: https://jsr.io/@nodef/extra-version/doc/~/signEqual
[abs]: https://jsr.io/@nodef/extra-version/doc/~/abs
[isPow2]: https://jsr.io/@nodef/extra-version/doc/~/isPow2
[prevPow2]: https://jsr.io/@nodef/extra-version/doc/~/prevPow2
[nextPow2]: https://jsr.io/@nodef/extra-version/doc/~/nextPow2
[pow2]: https://jsr.io/@nodef/extra-version/doc/~/pow2
[pow10]: https://jsr.io/@nodef/extra-version/doc/~/pow10
[log2]: https://jsr.io/@nodef/extra-version/doc/~/log2
[log10]: https://jsr.io/@nodef/extra-version/doc/~/log10
