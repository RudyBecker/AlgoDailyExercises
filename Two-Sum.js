let arr = [1, 2, 3, 4, 5];
let target = 7;

function two_sum(arr, target) {
  let n = 0;
  let k = arr.length - 1;
  let pointerOne = arr[n];
  let pointerTwo = arr[k];
  let finalArray = [];

  while (n < k) {
    sum = pointerOne + pointerTwo;
    if (sum == target) {
      return finalArray.concat([pointerOne, pointerTwo]);
    } else if (sum < target) {
      pointerOne += 1;
    } else {
      pointerTwo -= 1;
    }
  }
  return finalArray;
}

console.log(two_sum(arr, target));
