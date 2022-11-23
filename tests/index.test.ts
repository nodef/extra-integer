import * as integer from "../src"
import {
  is,
  abs,
  signEqual,
  isPow2,
  prevPow2,
  nextPow2,
  pow2,
  pow10,
  log2,
  log10,
} from "../src";




// 1. Basic tests.
test("example1", () => {
  var a = integer.is(9.11e-31);
  expect(a).toBe(false);
  // → false

  var b = integer.log10(10000);
  expect(b).toBe(4);
  // → 4

  var b = integer.nextPow2(63);
  expect(b).toBe(64);
  // → 64
});




// ABOUT
// -----

test("is", () => {
  var a = is(95);
  expect(a).toBe(true);
  var a = is(9.11e-31);
  expect(a).toBe(false);
  var a = is("e");
  expect(a).toBe(false);
});




// SIGN
// ----

test("abs", () => {
  var a = abs(-92);
  expect(a).toBe(92);
  var a = abs(61);
  expect(a).toBe(61);
  var a = abs(-68);
  expect(a).toBe(68);
});


test("signEqual", () => {
  var a = signEqual(20, 12);
  expect(a).toBe(true);
  var a = signEqual(20, -13);
  expect(a).toBe(false);
  var a = signEqual(-21, -13);
  expect(a).toBe(true);
});




// POWER / LOGARITHM
// -----------------

test("isPow2", () => {
  var a = isPow2(1024);
  expect(a).toBe(true);
  var a = isPow2(63);
  expect(a).toBe(false);
  var a = isPow2(1);
  expect(a).toBe(true);
});


test("prevPow2", () => {
  var a = prevPow2(63);
  expect(a).toBe(32);
  var a = prevPow2(128);
  expect(a).toBe(128);
  var a = prevPow2(1);
  expect(a).toBe(1);
});


test("nextPow2", () => {
  var a = nextPow2(63);
  expect(a).toBe(64);
  var a = nextPow2(128);
  expect(a).toBe(128);
  var a = nextPow2(1);
  expect(a).toBe(1);
});


test("pow2", () => {
  var a = pow2(4);
  expect(a).toBe(16);
  var a = pow2(2);
  expect(a).toBe(4);
  var a = pow2(0);
  expect(a).toBe(1);
});


test("pow10", () => {
  var a = pow10(4);
  expect(a).toBe(10000);
  var a = pow10(2);
  expect(a).toBe(100);
  var a = pow10(0);
  expect(a).toBe(1);
});


test("log2", () => {
  var a = log2(64);
  expect(a).toBe(6);
  var a = log2(31);
  expect(a).toBe(4);
  var a = log2(1);
  expect(a).toBe(0);
});


test("log10", () => {
  var a = log10(10000);
  expect(a).toBe(4);
  var a = log10(999);
  expect(a).toBe(2);
  var a = log10(1);
  expect(a).toBe(0);
});
