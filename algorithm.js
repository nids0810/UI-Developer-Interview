#Basic Algorithm questions#

1. Factorial of a number

//using for loop
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
function reverseString(str) {
	let result = "";
  for (let char of str) {
  	result = char + result;
  }
  return result;
}
console.log(reverseString("india"));

//using for loop
function reverseString(str) {
	let result = "";
  for (let i = 0; i < str.length; i++) {
  	result = str[i] + result;
  }
  return result;
}
console.log(reverseString("india"));

3. Palindrome

//using JS method
function isPalindrome(str) {
	let re = /[^A-Za-z0-9]/g;
  str = str.toLowerCase().replace(re, "");
  let strNew = str.split("").reverse().join("");
  if(str === strNew) {
  	return true;
  }
  return false;
}
console.log(isPalindrome("race, Car."));

//using for of loop
function isPalindrome(str) {
	let re = /[^A-Za-z0-9]/g;
  str = str.toLowerCase().replace(re, "");
  let strNew = "";
 	for (let char of str) {
  	strNew = char + strNew;
  }
  if(str === strNew) {
  	return true;
  }
  return false;
}
console.log(isPalindrome("race, Car."));

