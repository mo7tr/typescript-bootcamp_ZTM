/* eslint-disable */
import { strict as assert } from "assert";

import { add, setCase, quote, max } from "./mylib";

const nums: number[] = [];
const nums2: number[] = [1, 3, 2, 10, 8, 9];

const m = max(nums);
if (m !== null) {
  console.log(`${m}`);
} else {
  console.log(quote("empty array")());
}

const m2 = max(nums2);
if (m2 !== null) {
  console.log(`${m2}`);
} else {
  console.log(quote("empty array")());
}

const message = "hello";
const updated = setCase(message, "uppercase");
assert.equal(updated, "HELLO");

console.log("add =>", add(1, 5, 3));
