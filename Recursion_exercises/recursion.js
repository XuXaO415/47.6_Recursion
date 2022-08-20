/** product: calculate the product of an array of numbers. */
//Write a function that finds the product of an array of numbers:

// function product(nums) {
//   //base case
//   if (nums.length === 0) return 1;

//   //normal case
//   let total = 1;
//   for (let i = 0; i < nums.length; i++) {
//     total *= nums[i];
//   }
//   return total;
// }


function product(nums) {
  // base case
  if (nums.length === 0) return 1;
  //return recursive case
  return nums[0] * product(nums.slice(1));
}

console.log(product([1, 2, 3, 4])); // 24
console.log(product([3, 43, -1, 45, 2])); // -11610

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  //base case
  if (words.length === 0) return 0;
  //normal case
  let longestWord = words[0];
  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord.length;
  // another normal case
  // return Math.max(...words.map(word => word.length));
}
console.log(longest(["hello", "goodbye", "hello", "hi"])); // 5
console.log(longest(['hello', 'goodbye', 'hello'])); // 7
console.log(longest(["floccinaucinihilipilification", "pneumonoultramicroscopicsilicovolcanoconiosis", "onomatopoeia"])); // 45 😭


/** everyOther: return a string with every other letter. */
//Write a function that returns a string of every other character:

function everyOther(str) {
  //base case
  if (str.length === 0) return "";
  //normal case
  let newStr = "";
  for (let i = 0; i < str.length; i += 2) {
    newStr += str[i];
  }
  return newStr;
}

console.log(everyOther("hello")); // "hlo"
console.log(everyOther("abcdefg")); // "aceg"
console.log(everyOther("calculator")); // "cluao"

/** isPalindrome: checks whether a string is a palindrome or not. */
// Write a function that returns true/false depending on whether passed-in string is a palindrome:

function isPalindrome(str) {
  //base case
  if (str.length === 0) return true;
  //normal case
  let strCheck = str.split("").reverse().join("");
  return str === strCheck;
}

console.log(isPalindrome("tacocat")); // true
console.log(isPalindrome("tacodog")); // false
console.log(isPalindrome("wow")); // true 


/** findIndex: return the index of val in arr (or -1 if val is not present). */
//Given an array and a string, return the index of that string in the array (or -1 if not present):

// function findIndex(arr, val) {

//   //base case
//   if (arr.length === 0) return -1;
//   //normal case
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === val) {
//       return i;
//     }
//   }
//   return -1;
// }

function findIndex(arr, val, idx = 0) {
  //base case
  if (arr.length === idx) return -1;
  //normal case
  if (arr[idx] === val) {
    return idx;
  }
  return findIndex(arr, val, idx + 1);
}

// console.log(findIndex([1, 2, 3, 4, 5], 3)); // 2
let animals = ["duck", "cat", "pony"];
console.log(findIndex(animals, "pony")); // 2
console.log(findIndex(animals, "porcupine")); // -1

/** revString: return a copy of a string, but in reverse. */

// function revString(str) {
//   //base case 
//   if (str.length === 0) return ""; // if str is empty, return an empty string
//   //normal case
//   let strCopy = ""; // create a new string
//   for (let i = str.length - 1; i >= 0; i--) { // loop through the string backwards
//     strCopy += str[i]; // add each character to the new string
//   }
//   return strCopy; // return string
// }



function revString(str, newStr = "", idx = str.length - 1) {
  //base case 
  if (idx < 0) return newStr; // if idx is less than 0, return newStr
  //normal case
  newStr += str[idx]; // add each character to the new string
  return revString(str, newStr, idx - 1); // return string
}

console.log(revString("porcupine")); // 'enipucrop'
console.log(revString("hello")); // 'olleh' 
console.log(revString("seahorse")); // esrohaes 


/** gatherStrings: given an object, return an array of all of the string values. */
//Given an object, return an array of all the values in the object that are string

// function gatherStrings(obj) {
//   //base case 
//   if (Object.keys(obj).length === 0) return [];
//   //normal case
//   if (typeof obj === "string") {
//     return [obj];
//   }
//   let arr = [];
//   for (let key in obj) {
//     if (typeof obj[key] === "string") {
//       arr.push(obj[key]);
//     } else if (typeof obj[key] === "object") {
//       arr = arr.concat(gatherStrings(obj[key]));
//     }
//   }
//   return arr;
// }

function gatherStrings(obj, arr = []) {
  if (Object.keys(obj).length === 0) return arr;
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      arr.push(obj[key]);
    } else if (typeof obj[key] === "object") {
      arr = arr.concat(gatherStrings(obj[key]));
    }
  }
  return arr;
}

let nestedObj = {
  firstName: "Lester",
  favoriteNumber: 22,
  moreData: {
    lastName: "Testowitz"
  },
  funFacts: {
    moreStuff: {
      anotherNumber: 100,
      deeplyNestedString: {
        almostThere: {
          success: "you made it!"
        }
      }
    },
    favoriteString: "nice!"
  }
};


console.log(gatherStrings(nestedObj)); // ["Lester", "Testowitz", "you made it!", "nice!"];

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

// function binarySearch(arr, val, idx = 0, end = arr.length - 1) {
//   //base case
//   if (idx > end) return -1;
//   //normal case
//   let mid = Math.floor((idx + end) / 2);
//   if (arr[mid] === val) {
//     return mid;
//   } else if (arr[mid] > val) {
//     return binarySearch(arr, val, idx, mid - 1);
//   } else {
//     return binarySearch(arr, val, mid + 1, end);
//   }
// }


function binarySearch(arr, val, start = 0, end = arr.length - 1) {
  // base case 
  if (start > end) return -1; // if start is greater than end, return -1

  // normal case
  let mid = Math.floor((start + end) / 2); // find the middle index
  if (arr[mid] === val) return mid; // if the middle index is the value, return the index
  if (arr[mid] > val) { // if the middle index of the array is greater than the value, search the opposite side of the array
    return binarySearch(arr, val, start, mid - 1); // search the left side of the array
  }
  return binarySearch(arr, val, mid + 1, end); // search the right side of the array

}


console.log(binarySearch([1, 2, 3, 4], 1)); // 0
console.log(binarySearch([1, 2, 3, 4], 3)); // 2
console.log(binarySearch([1, 2, 3, 4], 5)); // -1
console.log(binarySearch([-2, -1, 0, 1, 2], -2)); // 0

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};