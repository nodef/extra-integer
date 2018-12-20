[Sign extend] [variable bit-width integer] to [32-bit integer].

```javascript
const signExtend = require('@extra-integer/sign-extend');
// signExtend(integer, <bit-width>)

signExtend(15, 4);
// -1
signExtend(3, 3);
// 3
signExtend(4, 3);
// -4
```


[![extra-integer](https://i.imgur.com/toEbRv5.jpg)](https://www.npmjs.com/package/extra-integer)

[Sign extend]: https://en.wikipedia.org/wiki/Sign_extension
[variable bit-width integer]: https://en.wikipedia.org/wiki/Variable-length_quantity
[32-bit integer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators
