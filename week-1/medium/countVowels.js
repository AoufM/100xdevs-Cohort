/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let count = 0;
  let arr1 = str.split("");
  let arr2 = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  for (let i = 0; i < arr1.length; i++) {
    const element = arr1[i];
    arr2.forEach((item) => {
      if (element === item) {
        count = count + 1;
      }
    });
  }
  return count;
}

module.exports = countVowels;
