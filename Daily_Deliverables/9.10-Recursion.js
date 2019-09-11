// Independent Practice
// Write a recursive function isPalindrome(aString) that returns true if aString is a palindrome. A palindrome is any string that is the same read forwards or backwards:

// isPalindrome('racecar') -> true
// isPalindrome('step on no pets') -> true
// isPalindrome('a') -> true
// isPalindrome('goat') -> false

isPalindrome = (aString) => {
    //base case #1
    if(aString.length === 0 || aString.length === 1) return true;
    //base case #2 - to determine if it is not a palindrome
    if(aString[0] !== aString[aString.length -1]) return false;

    return isPalindrome(aString.substr(1, aString.length -2))

}

console.log(isPalindrome('racecar'));
console.log(isPalindrome('step on no pets'));
console.log(isPalindrome('a'));
console.log(isPalindrome('goat'));