/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let str_1 = str1.toUpperCase();
  let str_2 = str2.toUpperCase();
  const arr1 = str_1.split("");
  const arr2 = str_2.split("");
  if (
    str_1.length !== str_2.length ||
    !arr1.every((ele) => arr2.includes(ele))
  ) {
    return false;
  } else if (arr1.every((ele) => arr2.includes(ele))) {
    return true;
  }
}

console.log(isAnagram("Final", "lnial"));

module.exports = isAnagram;
