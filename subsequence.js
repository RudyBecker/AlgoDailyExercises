const str = "chicken";
const sub = "hen";

// const str = "test"
// const sub = "zzzzzzzzzzzz"

function isASubsequence(sub, str) {
  //test if sub.length is equal to 0
  if (sub.length === 0) {
    return true;
  }
  
  //set iterator values
  let i = 0; 
  let j = 0; 
  
  //while loop until i iterator equals str.length
  while (i <= str.length) {
  
  //if match then keep going on substring
    if (sub[j] === str[i]) {
    j++;
    
    //once iterator goes through the length of the substring and it is equal to the substring return true (substring is indeed a subsequence of string)
      if( j === sub.length) {
      return true;
      }
    }
    // increase i iterator and check next string value
    i++;
  }
  
  // no substring found
  
  return false;
}

console.log(isASubsequence(sub, str));
