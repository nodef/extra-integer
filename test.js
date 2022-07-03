const integer = require('./');
const assert = require('assert');


// 1. Basic tests.
function example1() {
  var a = integer.is(9.11e-31);
  assert.equal(a, false);
  // → false

  var a = integer.log10(10000);
  assert.equal(a, 4);
  // → 4

  var a = integer.nextPow2(63);
  assert.equal(a, 64);
  // → 64
}
example1();
