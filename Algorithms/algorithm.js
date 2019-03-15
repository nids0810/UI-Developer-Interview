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
//using reduce()
function reverse(str) {
	return str.split('').reduce(function(res, char){
  	return res = char + res;
  }, '');
}
console.log(reverse('Greetings!'));

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

//===============//
/* 15.Mean, Median, Mode */
//===============//
    function findMean(arr) {
        var total = arr.reduce(function(total, value){
            return total + value;
        });
        var mean = (total/arr.length).toFixed(2);
        return mean;
    }

    function findMedian(arr) {
        arr.sort();
        var num;
        var len = arr.length;
        if(len % 2 !== 0) {
            num = (len+1)/2;
        } else {
            num = ((len/2) + (len/2) + 1)/2;
        }
        return arr[num-1];
    }

    function findMode(arr) {
        var obj = {};
        var count = 0;
        var maxNum = null;
        for(var item of arr) {
            obj[item] = obj[item] + 1 || 1;

            if(obj[item] > count) {
                count = obj[item];
                maxNum = item;
            }
        }
        return maxNum;
    }

    console.log(findMean([1, 2, 2, 3, 4]));
    console.log(findMedian([1, 2, 2, 3, 4]));
    console.log(findMode([1, 2, 2, 3, 4]));

//===============//
/* 16.Two Sum: Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once */
//===============//
function twoSum(arr, target) {
    var obj = {};
    var newArr = [];
    for(var item of new Set(arr)) {
        obj[item] = true;
        var diff = target - item;
        if(obj[diff]) {
            newArr.push([diff, item]);
        }
    }
    return newArr;
}
console.log(twoSum([6, 3, 2, 5, 4], 9));

//===============//
/* 17. For a given number, find all the prime numbers from zero to that number */
//===============//

function isPrime(n) {
    if(n < 2) {
        return false;
    } else if(n === 2) return true;
    for(var i = 2; i < n; i++) {
        if(n % i === 0) {
            return false;
        }
    }
    return true;
}
function primes(num) {
    var arr = [];
    for(var i = 0; i <= num; i++) {
        if(isPrime(i)) {
            arr.push(i);
        }
    }
    return arr;
}
console.log(primes(20));

//using better technique

function isPrime(n) {
	var count = 0;
	if(n === 2) {
		return true;
	}
	if(n<2 || n%2 === 0) {
		return false;
	}
	for(var i=3; i <= Math.sqrt(n); i=i+2) {
		if(n%i === 0) {
			return false;
		}
		count ++;
	}
			
	console.log(count);
	return true;
}

function printPrime(num) {
	for(var i = 0; i<=num; i++) {
		if(isPrime(i)){
			console.log(i);
		}
	}
}

console.log(printPrime(30));

//console.log(isPrime(23));

//===============//
/* 18. Implement a function that returns the fibonacci number at a given index */
//===============//
function fibonacci(index) {
    if(index > 0 && index < 3) {
        return 1;
    }
    return fibonacci(index - 1) + fibonacci(index - 2);
}
console.log(fibonacci(10));

// braces pattern 
function stringOrder(str) {
	var re = /([^\[\]\{\}\(\)])/g;
	str = str.replace(re, "");
	var reValid = /(\{\}|\(\)|\[\])/g; // {},(),[], ([{}]),[{()}],{[()]}, [{}], ([]), {()}
	while(str.match(reValid)) {
		str = str.replace(reValid, "");
	}
	console.log(str);
	if(str==="")return true; 
	else return false;
}
console.log(stringOrder("{([()])} {},(),[], ([{})]),[{()}],{[()]}[{}], ([]), {()}"));

function sorting() {
	var arr = [100, 180, 260, 720, 310, 40, 535, 695]; //5th-buy 7th-sell
	var buy = 0;
	var sell = 0;
	var buyPos = 0;
	var sellPos = 0;
	var profit = -1;
	var flag = true;
	for(var i=0; i<arr.length-1; i++) {
		sell = arr[i+1];
		sellPos = i+1;
		if(flag) {
			buy = arr[i];
			buyPos = i;
		}
		if(sell < buy) {
			flag = true;
			continue;
		} 
		else { 
	      var temp_profit = sell - buy;
	      if (temp_profit > profit) { 
	      	profit = temp_profit; 
	      }
	      flag = false;
    	}

	}

	return  buyPos +" : "+ buy +"  "+ sellPos +" : "+ sell;
}
console.log(sorting());

// Merge Sorting
function merge(left, right) {
	var result = [];
  while(left.length && right.length) {
  	if(left[0] < right[0]) {
    	result.push(left.shift());
    } else {
    	result.push(right.shift());
    }
  }
  return [...result, ...left, ...right];
}

function mergeSort(arr) {
	if(arr.length === 1) {
  	return arr;
  }
  var center = Math.floor(arr.length/2);
  var left = arr.slice(0, center);
  var right = arr.slice(center);
  return merge(mergeSort(left), mergeSort(right));
}
console.log(mergeSort([1, -10, 5, 30, 0]));

//merge two sorted array
var a = [1,2,3,4,5,6,7];
    var b = [4,11];

    function merge(a, b) {
     var arr = [];

     while(a.length != 0 && b.length !=0) {
       if(a[0] < b[0]) {
         arr.push(a.shift());
       } else {
         arr.push(b.shift());
       }
     }

     if(a.length !=0) {
       while(a.length!=0) {
         arr.push(a.shift());
       }
     }
     else {
       while(b.length!=0) {
         arr.push(b.shift());
       }
     }
     return arr;
   }

   console.log(merge(a,b));

//Given an array of integers, return indices of the two numbers such that they add up to a specific target.
var twoSum = function(nums, target) {
    var obj = {};
    for(var item of nums) {
        obj[item] = true;
    }
    for(var item in obj) {
        item = parseInt(item);
        var diff = target - item;
        if(obj[diff]) {
            if(diff > item) {
              return [nums.indexOf(item), nums.indexOf(diff)];
            } else if(diff === item) {
              return [nums.indexOf(diff), nums.indexOf(diff, nums.indexOf(diff)+1)];
            } else {
              return [nums.indexOf(diff), nums.indexOf(item)];
            }
        }
    }
};
