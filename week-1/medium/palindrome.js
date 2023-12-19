/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let strU= str.toUpperCase();
  let str_space=strU.replace(/[\W_]/g, ''); 
  let arr1=str_space.split('');
  let reverseArr= arr1.reverse();
  console.log(reverseArr);
  let newStr= reverseArr.join('');
  if (str_space==newStr) {
    return true;
  }
  else{
    return false;
  }
};


module.exports = isPalindrome;
