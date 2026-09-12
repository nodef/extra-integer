import {assertEquals} from "@std/assert";
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
} from "./index.ts";




// 1. Basic tests.
Deno.test("example1", () => {
  const a = is(9.11e-31);
  assertEquals(a, false);
  // → false

  let b;
  b = log10(10000);
  assertEquals(b, 4);
  // → 4

  b = nextPow2(63);
  assertEquals(b, 64);
  // → 64
});




// ABOUT
// -----

Deno.test("is", () => {
  let a;
  a = is(95);
  assertEquals(a, true);
  a = is(9.11e-31);
  assertEquals(a, false);
  a = is("e");
  assertEquals(a, false);
});




// SIGN
// ----

Deno.test("abs", () => {
  let a;
  a = abs(-92);
  assertEquals(a, 92);
  a = abs(61);
  assertEquals(a, 61);
  a = abs(-68);
  assertEquals(a, 68);
});


Deno.test("signEqual", () => {
  let a;
  a = signEqual(20, 12);
  assertEquals(a, true);
  a = signEqual(20, -13);
  assertEquals(a, false);
  a = signEqual(-21, -13);
  assertEquals(a, true);
});




// POWER / LOGARITHM
// -----------------

Deno.test("isPow2", () => {
  let a;
  a = isPow2(1024);
  assertEquals(a, true);
  a = isPow2(63);
  assertEquals(a, false);
  a = isPow2(1);
  assertEquals(a, true);
});


Deno.test("prevPow2", () => {
  let a;
  a = prevPow2(63);
  assertEquals(a, 32);
  a = prevPow2(128);
  assertEquals(a, 128);
  a = prevPow2(1);
  assertEquals(a, 1);
});


Deno.test("nextPow2", () => {
  let a;
  a = nextPow2(63);
  assertEquals(a, 64);
  a = nextPow2(128);
  assertEquals(a, 128);
  a = nextPow2(1);
  assertEquals(a, 1);
});


Deno.test("pow2", () => {
  let a;
  a = pow2(4);
  assertEquals(a, 16);
  a = pow2(2);
  assertEquals(a, 4);
  a = pow2(0);
  assertEquals(a, 1);
});


Deno.test("pow10", () => {
  let a;
  a = pow10(4);
  assertEquals(a, 10000);
  a = pow10(2);
  assertEquals(a, 100);
  a = pow10(0);
  assertEquals(a, 1);
});


Deno.test("log2", () => {
  let a;
  a = log2(64);
  assertEquals(a, 6);
  a = log2(31);
  assertEquals(a, 4);
  a = log2(1);
  assertEquals(a, 0);
});


Deno.test("log10", () => {
  let a;
  a = log10(10000);
  assertEquals(a, 4);
  a = log10(999);
  assertEquals(a, 2);
  a = log10(1);
  assertEquals(a, 0);
});
