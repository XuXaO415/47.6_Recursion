/** product: calculate the product of an array of numbers. */
//Write a function that finds the product of an array of numbers:

function product(nums) {
  //base case
  if (nums.length === 0) return 1;

  //recursive case
  // return nums[0] * product(nums.slice(1));

  //normal case
  let total = 1;
  for (let i = 0; i < nums.length; i++) {
    total *= nums[i];
  }
  return total;
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

function findIndex(arr, val) {

  //base case
  if (arr.length === 0) return -1;
  //normal case
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

// console.log(findIndex([1, 2, 3, 4, 5], 3)); // 2
let animals = ["duck", "cat", "pony"];
console.log(findIndex(animals, "pony")); // 2
console.log(findIndex(animals, "porcupine")); // -1

/** revString: return a copy of a string, but in reverse. */
//Return a copy of a string, reversed:


function revString(str) {
  //base case 
  if (str.length === 0) return "";
  //normal case
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

console.log(revString("porcupine")); // 'enipucrop'
console.log(revString("hello")); // 'olleh' 
console.log(revString("seahorse")); // esrohaes 


/** gatherStrings: given an object, return an array of all of the string values. */
//Given an object, return an array of all the values in the object that are string

// function gatherStrings(obj) {
//   //base case
//   if (obj.length === 0) return [];
//   //normal case
//   let newArr = [];
//   for (let key in obj) {
//     if (typeof obj[key] === "string") {
//       newArr.push(obj[key]);
//     }
//   }
//   return newArr;
// }

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

function binarySearch(arr, val) {

}


console.log(binarySearch([1, 2, 3, 4], 1)); // 0
console.log(binarySearch([1, 2, 3, 4], 3)); // 2
console.log(binarySearch([1, 2, 3, 4], 5)); // -1

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