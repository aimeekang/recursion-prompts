/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
  if (n < 0) {
    return null;
  }

  if (n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
  if (array.length === 0) {
    return 0;
  }

  if (array.length > 0) {
    return array[0] + sum(array.slice(1));
  }
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  var sum = 0;
  // set case for current input
  if (typeof array === 'number') {
    sum += array;
  }
  // set case to detect nestedness
  // if nested,
  if (Array.isArray(array)) {
    array.forEach(function(ele) {
      sum += arraySum(ele);
    });
  }

  return sum;
};

// 4. Check if a number is even.
var isEven = function(n) {
  n = Math.abs(n);
  // base case
  if (n === 0) {
    return true;
  } else if (n === 1) {
    return false;
  }
  // recursive case
  if (n > 0) {
    return isEven(n - 2);
  }
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  // base case
  if (n === 0) {
    return 0;
  }
  // recursive case(s)
  if (n > 0) {
    return (n - 1) + sumBelow(n - 1);
  } else if (n < 0) {
    return (n + 1) + sumBelow(n + 1);
  }
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
  var result = [];
  // base case: if no integers in range
  if (y - x === 0 || Math.abs(y - x) === 1) {
    return result;
  }
  // ending greater than starting
  if (y > x) {
    result = [x + 1].concat(range(x + 1, y));
    return result;
  }
  // starting greater than ending
  if (x > y) {
    result = [x - 1].concat(range(x - 1, y));
    return result;
  }

};

// where y > x (x goes up by one as we recall the function)
// range(2, 5) // [3].concat([4]) = [3, 4]
// range(3, 5) // [4].concat()[] = [4]
// range(4, 5) // [] (base case)

// where x > y (x goes down by one as we recall the function)
// range (5, 2) // [4].concat([3]) = [4, 3]
// range (4, 2) // [3].concat([]) = [3]
// range (3, 2) // Math.abs(-1) === 1, return [] (base case)

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  // base cases
  if (exp === 0) {
    return 1;
  }

  if (exp === 1) {
    return base;
  }
  // recursive cases
  if (exp > 0) {
    return base * exponent(base, exp - 1);
  } else if (exp < 0) {
    return Number(((1 / base) * exponent(base, exp + 1)).toFixed(5));
  }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  // base case
  if (n === 1) {
    return true;
  }
  // recursive case
  if (n > 1 && n % 2 === 0) {
    return powerOfTwo(n / 2);
  } else {
    return false;
  }
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
  // base case
  if (string === '') {
    return '';
  }

  var firstChar = string[0];
  var remaining = string.slice(1);
  var reversed = reverse(remaining) + firstChar;
  return reversed;
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  var newString = string.split(' ').join('').toLowerCase();
  // base case
  if (newString.length === 0) {
    return true;
  }

  // recursive case
  if (newString[0] === newString[newString.length - 1]) {
    return palindrome(newString.slice(1, newString.length - 1));
  } else {
    return false;
  }

};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4

// NOT WORKING:
var modulo = function(x, y) {
  var sum = y;
  // base case
  if (y > x) {
    return sum;
  }
  // recursive case
  if (y < x) {
  sum += modulo(x, y + y);
  }

  return x - sum;
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
  if (x === 0 || y === 0) {
    return 0;
  }

  if ((y < 0 && x > 0) || (y > 0 && x > 0)) {
    return y + multiply(x - 1, y);
  } else if (y > 0 && x < 0) {
    return x + multiply(x, y - 1);
  } else if (y < 0 && x < 0) {
    return -y + multiply(x + 1, y);
  }
};

// examples:
// multiply(5, 4) // 20
// multiply(5, 6) // 30
// multiply(-5, -2) // 10
// multiply(-5, -3)
// multiple (-5, 6) // -30

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  // base case
  // if (str1.length > str2.length || str2.length > str1.length) {
  //   return false;
  // }

  if (str1 === '' && str2 === '') {
    return true;
  }
  // recursive case
  if (str1.length > 0 && str1[0] === str2[0]) {
    return compareStr(str1.slice(1), str2.slice(1));
  } else {
    return false;
  }
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
// var createArray = function(str) {
//   // base case
//   if (str === '') {
//     return [];
//   }
//   // recursive case
//   if (str.length > 0) {
//     var firstChar = str[0];
//     var remaining = str.slice(1);
//     var createdArray = [firstChar].concat(createArray(remaining));
//     return createdArray;
//   }
// };

var createArray = function(str) {
  var result = [];
  // base case
  if (str === '') {
    return result;
  }
  // recursive case
  if (str.length > 0) {
    var firstChar = str[0];
    var remaining = str.slice(1);
    result.push(firstChar);
    result = result.concat(createArray(remaining));
    return result;
  }
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
  var result = [];

  if (array.length === 0) {
    return result;
  }

  if (array.length > 0) {
    var firstChar = array[0];
    result.push(firstChar);
    var remaining = array.slice(1);
    var reverse = reverseArr(remaining).concat(result);
    return reverse;
  }
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  var result = [value];
  // base case
  if (length === 1) {
    return result;
  }
  // recursive case
  if (length > 1) {
    result = result.concat(buildList(value, length - 1));
    return result;
  }
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
  console.log(n);
  var result = [];
  // base case
  if (n === 0) {
    return result;
  }
  console.log(result);
  if (n % 3 === 0 && n % 5 === 0) {
    result.push('FizzBuzz');
  } else if (n % 3 === 0) {
    result.push('Fizz');
  } else if (n % 5 === 0) {
    result.push('Buzz');
  } else {
    result.push(n.toString());
  }
  // recursive
  result = fizzBuzz(n - 1).concat(result);
  console.log(result);
  return result;
};

// 20. Count the occurrence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  var count = 0;
  // base case
  if (array.length === 0) { // can also be written !array.length
    return count;
  }

  if (array[0] === value) {
    count++
  }
  // recursive case
  if (array.length > 0) {
    count += countOccurrence(array.slice(1), value);
  }

  return count;
};

// var countOccurrence = function(array, value) {
//   // base case
//   if (array.length === 0){
//     return 0;
//   }

//   return (array[0] === value) + countOccurrence(array.slice(1), value);
// }


// for loop:
// var countOccurance = function(array, value) {
//   var count = 0;

//   for (var i = 0; i < array.length; i++) {
//     var ele = array[i];
//     if (ele === value) {
//       count++;
//     }
//   }

//   return count;
// }

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]

// NOT PASSING:
var rMap = function(array, callback) {
  var result = [];
  // base case
  if (array.length === 0) {
    return result;
  }
  // recursive case
  if (array.length > 0) {
    result = result.concat(callback(array.slice(1)));
  }

  return result;
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2

// NOT PASSING:
var countKeysInObj = function(obj, key) {
  var count = 0;
  // set a case for the current input
  if (typeof obj === 'string' && obj === key) {
    count++;
  }

  // if nested,
  if (typeof obj === 'object') {
    // loop over nested structure
    for (var keyName in obj) {
      // recursively call on all values;
      count += countKeysInObj(keyName, key);
    }
  }

  return count;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
  var count = 0;

  for (var key in obj) {
    var objValue = obj[key];
    // base case
    if (!objValue) { // could also be written as objValue === undefined
      return count;
    }

    if (typeof objValue === 'string' && objValue === value) {
      count++;
    }
    // recursive case
    if (typeof objValue === 'object') {
      count += countValuesInObj(objValue, value);
    }
  }

  return count;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
  for (var key in obj) {
    var value = obj[key];
    // base case
    if (!value) {
      return obj;
    }

    if (key === oldKey) {
      obj[newKey] = value;
      delete obj[oldKey];
    }
    // recursive case
    if (typeof value === 'object') {
      replaceKeysInObj(value, oldKey, newKey);
    }
  }

  return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
  var result = [];
  // base case
  if (array.length === 0) {
    return result;
  }
  // recursive case
  if (array.length > 0) {
    var capWord = array[0].toUpperCase();
    result.push(capWord);
    result = result.concat(capitalizeWords(array.slice(1)));
  }

  return result;
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
  var result = [];
  // base case
  if (array.length === 0) {
    return result;
  }
  // recursive case
  if (array.length > 0) {
    var capFirst = array[0][0].toUpperCase() + array[0].slice(1);
    result.push(capFirst);
    result = result.concat(capitalizeFirst(array.slice(1)));
  }

  return result;
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
  var sum = 0;
  // lookup each key in obj
  if (typeof obj === 'number' && obj % 2 === 0) {
    sum += obj;
  }

  if (typeof obj === 'object') {
    for (var key in obj) {
      var value = obj[key];
        sum += nestedEvenSum(value);
      }
  }

  return sum;
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
  var result = [];
  // base case
  if (!Array.isArray(array)) {
    result.push(array);
  }
  // if nested
  if (Array.isArray(array)) {
    // loop over the nested structure
    array.forEach(function(ele) {
      // recursive call on all values
      result = result.concat(flatten(ele));
    });
  }
  return result;
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
  // create object if not provided
  if (obj === undefined) {
    obj = {};
  }
  // base case: we've gone through every char of str
  if (str === '') {
    return obj;
  }
  // recursive case: if we still have chars
  if (str.length > 0) {
    var char = str[0];

    if (obj[char] === undefined) {
      obj[char] = 1;
    } else {
      obj[char] += 1;
    }
  }
  // move onto next value
  return letterTally(str.slice(1), obj);
}


// NOT PASSING:
// var letterTally = function(str, obj) {
//   var result = {};
//   // base case
//   if (str === '') {
//     return result;
//   }

//   if (str.length > 0) {
//     var char = str[0];
//     if (result[char] === undefined) {
//       result[char] = 1;
//       return letterTally(str.slice(1), obj)
//     } else {
//       result[char] += 1;
//       return letterTally(str.slice(1), obj)
//     }
//   }
//   // return result;
// };

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]

// NOT PASSING:
var compress = function(list) {
  var result = [];
  // base case
  if (list.length === 0) {
    return result;
  }

  if (list[0] !== result[result.length - 1]) {
    result.push(list[0]);
  } else {
    result = result.concat(list.slice(1));
  }

  return result;
};

// without recursion
// var compress = function(list) {
//   var result = [];

//   for (var i = 0; i < list.length; i++) {
//     var ele = list[i];
//     var lastNum = result[result.length - 1];

//     if (ele !== lastNum) {
//       result.push(ele);
//     }
//   }

//   return result;
// };

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  var result = [];
  // base case
  if (array.length === 0) {
    return result;
  }
  // case 1
  if (array.length % 2 === 0) {
    result.push(-1 * Math.abs(array.slice(-1)));
  } else {
    result.push(Math.abs(array.slice(-1)));
  }

  result = alternateSign(array.slice(0, -1)).concat(result);
  return result;
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  var numWords = {
    '0': 'zero',
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six',
    '7': 'seven',
    '8': 'eight',
    '9': 'nine'
  };
  var words = str.split(' ');
  var result = [];

  if (str === '') {
    return result;
  }

  if (str.length > 0) {
    var word = words[0];
    if (numWords[word] !== undefined) {
      result = result.concat(numWords[word]);
    } else {
      result = result.concat(word);
    }
  }

  return result.concat(numToText(words.slice(1).join(' '))).join(' ');
};

// without recursion
// var numToText = function(str) {
//   var numWords = {
//     '0': 'zero',
//     '1': 'one',
//     '2': 'two',
//     '3': 'three',
//     '4': 'four',
//     '5': 'five',
//     '6': 'six',
//     '7': 'seven',
//     '8': 'eight',
//     '9': 'nine'
//   };
//   var words = str.split(' ');
//   var newSent = [];

//   for (var i = 0; i < words.length; i++) {
//     var word = words[i];

//     if (numWords[word] === undefined) {
//       newSent.push(word);
//     } else {
//       newSent.push(numWords[word]);
//     }
//   }

//   return newSent.join(' ');
// };


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};
