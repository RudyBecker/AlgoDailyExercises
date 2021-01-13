function powerOfThree(num) {
  let currentQuotient = num; 
  if (currentQuotient === 1) {
    return false;
  }
  
  while (currentQuotient>0) {
    currentQuotient = currentQuotient /3; 
    if (currentQuotient === 1) {
       return true;
     } 
     }
       return false;
  }

console.log(powerOfThree(1));
console.log(powerOfThree(9));
console.log(powerOfThree(27));
console.log(powerOfThree(6561));
console.log(powerOfThree(7267647));
