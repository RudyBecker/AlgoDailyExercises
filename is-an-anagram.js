// This is my solution for AlgoDaily problem Is An Anagram
// Located at https://algodaily.com/challenges/is-an-anagram

let str1 = "conversation";
let str2 = "voices rant on";

function isAnagram(str1, str2) {
  //turn each string into array and sort alphabetical order
  let arrayOne = str1.split("").sort();
  let arrayTwo = str2.split("").sort();
  if (arrayOne.toString == arrayTwo.toString) {
    return true;
  } else {
    return false;
  }
}

console.log(isAnagram(str1,str2));

