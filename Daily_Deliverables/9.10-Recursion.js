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


// Challenges
// [Challenge] - Factorial
// The factorial of a whole number n is written n! and defined as the product of all positive whole numbers less than or equal to n.

// For example, the value of 3! (read: three factorial) is 6 which is calculated by multiplying together all whole numbers less than or equal to 3:

// factorial(3) = 3! = 3 * 2 * 1 = 6
// The value of 10 factorial, for example, can be calculated by:

// 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1
// Write a function that uses recursion to calculate the factorial of a number.

nFactorial = (n) => {
    //base case
        if (n === 1) return 1;
    //recursion case
    return nFactorial(n-1)*n;

}

console.log(nFactorial(10));

// Challenges
// [Challenge] - Factorial
// The factorial of a whole number n is written n! and defined as the product of all positive whole numbers less than or equal to n.

// For example, the value of 3! (read: three factorial) is 6 which is calculated by multiplying together all whole numbers less than or equal to 3:

// factorial(3) = 3! = 3 * 2 * 1 = 6
// The value of 10 factorial, for example, can be calculated by:

// 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1
// Write a function that uses recursion to calculate the factorial of a number.

