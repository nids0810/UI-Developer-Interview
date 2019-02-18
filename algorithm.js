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

//===============//
/* 7. Anagrams */
//===============//
//using JS method - linearithmic time
function sortString(str) {
  let re = /[^A-Za-z0-9]/g;
  return str.replace(re, "").toLowerCase().split("").sort().join("");
 }

function isAnagram(str1, str2) {
  str1 = sortString(str1);
  str2 = sortString(str2);
  if(str1 === str2) {
  	return true;
  }
  return false;
}
console.log(isAnagram("hello world", "world hello"));

//linear time complexity and a constant space complexity
function createStringObject(str) {
  let re = /[^A-Za-z0-9]/g;
  str = str.replace(re, "").toLowerCase();
  let obj = {};
  for(let char of str) {
  	obj[char] = obj[char] + 1 || 1;
  }
  return obj;
}

function isAnagrams(strA, strB) {
  let stringA = createStringObject(strA);
  let stringB = createStringObject(strB);
  if(Object.keys(stringA).length !== Object.keys(stringB).length) return false;
  for(let item in stringA) {
  	if(stringA[item] !== stringB[item]) return false; 
  }
  return true;
}
console.log(isAnagrams("hello world", "woldr ohell"));

//===============//
/* 8. Count the number of Vowels */
//===============//
function vowelsCount(str) {
  let count = 0;
  let vowels = "aeiou";
  for(let char of str.toLowerCase()) {
  	if(vowels.includes(char)) count++;
  }
  return count;
}
console.log(vowelsCount("nidhi"));

//using regular expression
function vowels(str) {
  let matches = str.match(/[aeiou]/ig);
  return matches ? matches.length : 0;
}
console.log(vowels("train"));

//===============//
/* 9. Array Chunking - Given an array and a size, split the array items into a list of arrays of the given size */
//===============//

//using slice method
function chunking(array, size) {
    let chunks = [];
    let index = 0;

    while (index < array.length) {
        chunks.push(array.slice(index, index + size));
        index = index + size;
    }

    return chunks;
}
console.log(chunking([1,2,3,4,5], 2));

//using for loop
function chunking(array, size) {
    let chunks = [];
    for (let i = 0; i < array.length; i += size) {
        chunks.push(array.slice(i, i + size));
    }

    return chunks;
}
console.log(chunking([1,2,3,4,5], 2));


//===============//
/* 10. Reverse Array */
//===============//
function reverseArray(arr) {
	let newArr = [];
	for(let i = (arr.length-1); i >= 0; i--) {
  	newArr.push(arr[i]);
  }
  return newArr;
}
console.log(reverseArray([1,3,7,2,6,9]));

//using JS method
function reverseArray(arr) {
	return arr.reverse();
}
console.log(reverseArray([1,3,7,2,6,9]));

//using for loop -best method
function reverseArray(arr) {
	for(let i = 0; i < arr.length / 2; i++) {
  	let temp = arr[i];
    	arr[i] = arr[arr.length - 1 - i];
    	arr[arr.length - 1 - i] = temp;
  }
  return arr;
}
console.log(reverseArray([1,3,7,2,6,9]));

//===============//
/* 11. Reverse Words - Given a phrase, reverse the order of the characters of each word */
//===============//
function reverseWord(word) {
  let newArr = [];
  for(let item of word.split(" ")) {
 	let stringWord = "";
	for(let char of item) {
		stringWord = char + stringWord;
	}
     newArr.push(stringWord);
  }
  return newArr.join(" ");
}
console.log(reverseWord("I love India!!"));

//using JS method
function reverseWord(word) {
  let newArr = [];
  for(let item of word.split(" ")) {
  	item = item.split("").reverse().join("");
    newArr.push(item);
  }
  return newArr.join(" ");
}
console.log(reverseWord("I love JavaScript!!"));

//using map()
function reverseWord(words) {
  return words.split(" ").map(function(value){
  	return value.split("").reverse().join("");
  }).join(" ");
}
console.log(reverseWord("I love JavaScript!!"));

//===============//
/* 12. Remove duplicates from an array */
//===============//
function removeDuplicates(names) {
  let iterableObj = new Set(names);
  return Array.from(iterableObj);
}
console.log(removeDuplicates(['John', 'Paul', 'George', 'Ringo', 'John']));

// using for loop and temp variable
let a = [1, 1, 2, 2, 4];
let b = [];
let len = a.length
let temp;
a.sort();
for(let i = 0; i < len; i++) {
	if(a[i] !== temp) {
  	temp = a[i];
  	b.push(a[i]);
  }
}
console.log(b);

//using object when array conatins number items.
function removeDuplicate(array) {
  let obj = {};
  for(let item of array) {
  	obj[item] = true;
  }
  return Object.keys(obj).map(function(key) { return parseInt(key) });
}
console.log(removeDuplicate([1, 7, 3, 7, 4, 5, 7, 5]));

//===============//
/* 13. Given a phrase, capitalize every word */
//===============//
//Using map
function capitalize(str){
	var str2 = str.split(" ").map(function(item){
    		var firstitem = item[0].toUpperCase();
		var res = item.slice(1);
        	return firstitem + res;
    	});
    return str2.join(" ");
}
console.log(capitalize("hello world"));

//===============//
/* 14.Ransom Note */
//===============//
 function isNote(note, mag) {
  	var obj = {};
  	for(var char of mag.toLowerCase().split(" ")) {
    		obj[char] = obj[char] + 1 || 1;
  	}
  	for(var item of note.toLowerCase().split(" ")) {
    	if(obj[item]) {
      		obj[item]--;
    	}
    	else {
      	return false;
    }
  }
  return true;
}
console.log(isNote("nidhi is", "my name is nidhi")); 
