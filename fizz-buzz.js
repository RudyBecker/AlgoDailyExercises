// This is my solution for AlgoDaily problem Fizz Buzz
// Located at https://algodaily.com/challenges/fizz-buzz

function fizzBuzz(n) {
	let finalArray = [];
	for (let i=1; i<= n; i ++) {
  	if ((i % 3 === 0) & (i % 5 === 0)) {
    	finalArray.push("fizzbuzz");
    } else if (i % 3 === 0) {
    	finalArray.push("fizz");
    } else if (i % 5 === 0) {
    	finalArray.push("buzz");
    } else {
    	finalArray.push(i);
    }
  }
  return finalArray.join("");
}

console.log(fizzBuzz(10));

