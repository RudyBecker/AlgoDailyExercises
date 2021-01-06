// This is my solution for AlgoDaily problem Reverse a String
// Located at https://algodaily.com/challenges/reverse-a-string

function reverseString(str) {
  //set variable and split string into array 
	let strArr = str.split(""); 
  //set start to 0
  let start = 0; 
  //set end to last position in string
  let end = str.length - 1;
  
  //while loop as long as start is less than or equal to end
  while (start <= end) {
    //assign temp variable to first letter in string
  	const temp = strArr[start];
    //assign first letter in string to last letter in string
  	strArr[start] = strArr[end];
    //assign last letter in string to temp variable which is first letter in string
    strArr[end] = temp;
    //increment start
    start ++; 
    //decrement end
    end --
  }
  //join array of letter to one final word
  return strArr.join("");
}

console.log(reverseString('hello'));

