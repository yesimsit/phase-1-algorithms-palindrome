function isPalindrome(word) {
  return word == word.split("").reverse().join("") ? true : false;
}
console.log(isPalindrome(mom))
/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
 if the word is equal with reversed word.It is palindrome.But if it is not equal, it is not a palindrome word.
  and if it is not palindrome the result will be false , but if it is palendrome the result will be true
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
