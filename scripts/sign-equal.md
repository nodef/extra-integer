Check if two [32-bit integers] have equal [sign] *([xor method])*.

```javascript
const signEqual = require('@extra-integer/sign-equal');
// signEqual(<integer-1>, <integer-2>)

signEqual(20, 12);
// true
signEqual(20, -13);
// false
signEqual(-21, -13);
// true
```


[![extra-integer](https://i.imgur.com/toEbRv5.jpg)](https://www.npmjs.com/package/extra-integer)

[32-bit integers]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators
[sign]: https://en.wikipedia.org/wiki/Sign_(mathematics)
[xor method]: https://graphics.stanford.edu/~seander/bithacks.html#DetectOppositeSigns
