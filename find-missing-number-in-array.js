// This is my solution for AlgoDaily problem Find Missing Number in Array
// Located at https://algodaily.com/challenges/find-missing-number-in-array

let numArr = [3,4,9,12,15,17,21];
//set missingArray variable
function findMissingNumbers(numArr){
let missing = [];
for (let i=0; i<numArr.length; i++) {
  //determine if gap is greater than 1
  if (numArr[i] - numArr[i-1] !=1) {
  //determine gap size
  let gapSize = ((numArr[i]-numArr[i-1]));
  let diff = 1;
    while (diff<gapSize){
      missing.push(numArr[i-1]+diff)
      diff ++
      } 
  } 
}
  return missing
}

console.log(findMissingNumbers(numArr))
