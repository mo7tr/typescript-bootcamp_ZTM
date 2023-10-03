// Write a generic function that can calculate the average of numbers in an
// array. The function should operate on types that are compatible with
// numbers, but should not work on non-numeric types, such as strings or
// booleans.
//
// To calculate an average:
// 1. Sum the numbers in the array
// 2. Divide the sum by the number of elements
//
// To confirm that your program runs as expected:
// 1. Run your function on the given `numbers` array
// 2. Assert that the average is 3

import { strict as assert } from "assert";

const numbers: number[] = [1, 2, 3, 4, 5];

const averageCalculator = <T extends number>(arr: T[]): number => {
  let sum = 0;

  for (const item of arr) {
    sum += item;
  }

  console.log("sum =>", sum);

  return sum / arr.length;
};

const average = averageCalculator(numbers);
console.log("average =>", average);
assert.equal(average, 3);
