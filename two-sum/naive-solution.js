/**
 * time complexity ==> O(n^2)
 * space complexity ==> O(1)
 * @param {number[]} arr
 * @param {number} sum
 */
const twoSum = (arr, sum) => {
  if (!Array.isArray(arr)) {
    return -1;
  } else if (arr.length === 0) {
    return -1;
  }
  // loop through each index
  for (let i = 0; i < arr.length; ++i) {
    // loop through next indices
    for (let j = i + 1; j < arr.length; ++j) {
      if (arr[i] + arr[j] === sum) {
        return [i, j];
      }
    }
  }
  return -1;
};

const arr = [5,2,3,7,9];
const sum = 14;

console.log(twoSum(arr, 14));
console.log(twoSum(arr, 0));
