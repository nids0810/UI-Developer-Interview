#Basic Algorithm questions#

1. Factorial of a number

//normal way
function factorial(num) {
	let product = 1;
  for (let i = 2; i <= num; i++) {
  	product = i * product;
  }
  return product;
}
console.log(factorial(6));

//using recursions
function factorial(num) {
  return (num < 2) ? 1 : num * factorial(num - 1);
}
console.log(factorial(5));

2. String Reversal
//using JS method
function reverseString(str) {
	return str.split("").reverse().join("");
}
console.log(reverseString("nidhi"));

//using for of loop
