// Independent Practice
// Go through the tutorial at https://regexone.com. Do at least lessons 1-10. This isn't Javascript specific, but it will help you understand how to match text with regular expressions.
// Write a function that takes a word and returns true if the word ends with tonica
const tonica = (input) => {
    return (/tonica$/.test(input))
};

console.log(tonica("techtonica"));
console.log(tonica("techta"));;

// Write a function expression that takes a string replaces all instances of symantec with semantic?

const replaceSym = (input) => {
    return input.replace(/symantec/, 'semantic')
};

console.log(replaceSym("I love symantec!"));

// Write a function that takes a string and deletes all words that end in ing?
const ingDelete = (input) => {
    return input.replace(/\w+[i][n][g][^\w]/g,'')
};

console.log(ingDelete("I am loving and hating symantec!"));

// Write a function that takes a string and returns true if it is an email address? Compare your answer with your neighbor.
const emailOrNot = (email) => {
    return /\w+[@]\w+\./.test(email)
};

console.log(emailOrNot("hihihi@gmail.com"));
console.log(emailOrNot("johny@yahoo.com"));
console.log(emailOrNot("hihihigmailcom"));

// Write a function that takes a string containing names separated by commas like "Leah, Russell, Michelle" and returns an array of names, ["Leah", "Russell", "Michelle"]
const strArray = (str) => {
    return str.match(/\w+/g)
};

console.log(strArray("cat,dog,fish"));
console.log(strArray("Leah, Russell, Michelle"));

// Challenges
// Write a regular expression that matches any participant name, but not any staff name
// What about a regular expression for all even-length strings?
// Do lessons 11+ on https://regexone.com
