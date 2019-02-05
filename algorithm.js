/* Basic Algorithm questions */
//===========================//
/* 1. Factorial of a number */
//===========================//
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

//=====================//
/* 2. String Reversal */
//=====================//
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

//================//
/* 3. Palindrome */
//================//
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

//=====================//
/* 4. Integer Reversal */
//=====================//
//using JS methods
function integerReversal(num) {
	return parseInt(num.toString().split("").reverse().join("")) * Math.sign(num);
}
console.log(integerReversal(8759));
console.log(integerReversal(-1200));

//using for of loop
function integerReversal(num) {
  let sign = Math.sign(num);
  num = num.toString();
  let result = "";
  for(let digit of num) {
  	result = digit + result;
  }
  return parseInt(result) * sign;
}
console.log(integerReversal(8759));
console.log(integerReversal(-1200));

//===============//
/* 5. Fizz Buzz */
//===============//
//Given a number as an input, print out every integer from 1 to that number. 
//However, when the integer is divisible by 2, print out “Fizz”; when it’s divisible by 3, 
//print out “Buzz”; when it’s divisible by both 2 and 3, print out “Fizz Buzz”.

function fizzbuzz(number) {
    let output = [];
    for (let i = 1; i <= number; i++) {
        if (i % 6 === 0) output.push("Fizz Buzz");
        else if (i % 2 === 0) output.push("Fizz");
        else if (i % 3 === 0) output.push("Buzz");
        else output.push(i);
    }
    return output;
}
console.log(fizzbuzz(8));

//===============//
/* 6. Max Character */
//===============//
function max(str) {
  let obj = {};
  for(let char of str) {
  	obj[char] = obj[char] + 1 || 1;
  }
  let count = 0;
  let maxchar = null;
  for(let item in obj) {
  	if(obj[item] > count) {
    	count = obj[item];
      maxchar = item;
    }
  }
  return maxchar;
}
console.log(max("nidhi"));
