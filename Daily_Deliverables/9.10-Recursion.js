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

// [Challenge] - Fibonacci
// The Fibonacci sequence appears in unexpected places all over mathematics and nature. It is defined by the following three rules:

// The first Fibonacci number is 1
// The second Fibonacci number is 1
// Every other Fibonacci number is the sum of the previous two Fibonacci numbers
// For example, the first few numbers in the Fibonacci sequence are:

// 1, 1, 2, 3, 5, 8, 13, 21, ...
// The next Fibonacci number is:

// 13 + 21 = 34
// Write a method fib(n) that calculates the nth Fibonacci number (starting from n = 1).

fibNum = (n) => {
    //base case
    if (n < 2) return n;

    //recursive case
    return fibNum(n-1)+fibNum(n-2);
}

console.log (fibNum(8));

// [Challenge] - GCD
// The GCD of two or more integers, none of which are zero is the largest positive integer that divides each of the integers. The greatest common divisor(GCD) is also known as:

// the greatest common factor (GCF),
// highest common factor (HCF),
// greatest common measure (GCM),
// highest common divisor.
// For example:

// the GCD of 48 and 14 is 2.

// Pseudocode to calculate GCD of two numbers:
// GCD(x, y)
// Begin
//     if y = 0 then
//         return x;
//     else
//         Call: GCD(y, x%y);
//     endif
// End
// Based on the pseudocode, write a function called GCD that returns the correct answer when 48 and 14 are passed in.