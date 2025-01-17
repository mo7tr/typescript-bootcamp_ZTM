// Write a generic function that can locate the first occurrence of an item in
// an array. The function should accept an array of any type as a parameter,
// along with an element to locate. If the element is found in the array, then
// the function should return the index of where that element exists in the
// array. If the element does not exist in the array, then the function should
// return `undefined`.
//
// To test that your function works properly, perform these steps:
// 1. Run your function with the existing `numbers` array and try to find the element 3
// 2. Assert that the index returned is 2
// 3. Run your function with the existing `numbers` array and try to find the element 6
// 4. Assert that your function returns `undefined`

import { strict as assert } from "assert";

const numbers: number[] = [1, 2, 3, 4, 5];

const indexFinder = <T>(arr: T[], element: T): number | undefined => {
  const index: number = arr.indexOf(element);

  console.log("index =>", index);

  if (index === -1) {
    return undefined;
  } else {
    return index;
  }
};

const returnedIndex = indexFinder(numbers, 3);
console.log("returnedIndex", returnedIndex);
assert.equal(returnedIndex, 2);

const returnedIndex2 = indexFinder(numbers, 6);
console.log("returnedIndex2", returnedIndex2);
assert.equal(returnedIndex2, undefined);
