//Challenge 1: Convert Inches to Meters
// Define a function called metersToInches that takes an input of the number of meters and outputs the result of the number of inches.

// Hint: 1 meter equals 39.3701 inches.

function metersToInches(meterNum){
    return `${meterNum*39.3701} in.`;
}

console.log(metersToInches(1.5));

//Challenge 2: Loop n Times
// Write a function named loopThrough that takes an argument that is a number and loops through and displays a message “Hello World” that number of times.

function loopThrough(loopNum){
    const message = "Hello World "; 
    return message.repeat(loopNum);   
}

console.log(loopThrough(10));

//Challenge 3: Number Sum
//Define a method called calculateSum to calculate the sum all the digits from 0 to an input number.

var obj = {
    calculateSum(inputNum) {
        let numSum = 0;
        for(let i=0; i<=inputNum;i++){
            numSum = numSum + i;
        }
        return numSum;
    }
  }
  
  console.log(obj.calculateSum(10));

  //Challenge 4: FizzBuzz
//   Write a function called fizzbuzz that prints each number from 1 to the input on a new line.

// For each multiple of 3, print "Fizz" instead of the number.
// For each multiple of 5, print "Buzz" instead of the number.
// For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.

function fizzbuzz(input){
    for(let i=1; i<=input; i++){
        if (i%3===0 && i%5===0){
           console.log("Fizzbuzz");
        } else if (i%3===0){
           console.log("Fizz");
        } else if (i%5===0){
          console.log("Buzz");
        } else {
           console.log(i);
        }
    }
}

fizzbuzz(16);

//Challenge 5 - Calculate Factorial Number
//A factorial number is the concept in math by value of multiplying numbers by each consecutively smaller number.
function factorial(num){
    let answer = 1;
    for(let i=num; i>0; i--){
        answer = i*answer;
    }
    return answer;
}

console.log(factorial(3));

//Challenge 6 Switch Statements
//Using a switch statement, write a function called sleep_in(weekday, vacation) with these criteria: The parameter weekday is True if it is a weekday, and the parameter vacation is True if we are on vacation. We sleep in if it is not a weekday or we're on vacation. Return True if we sleep in.

function sleep_in(weekday, vacation){
    switch(true) {
        case weekday === false && vacation === false:
            return "True";
        case weekday === true && vacation === false:
            return "False";
        case weekday === false && vacation === true:
            return "True"; 
    }
}

console.log(sleep_in(false, false));
console.log(sleep_in(true, false));
console.log(sleep_in(false, true));

//Challenge 7 - Accessing Arrays
//Write a function called common(a, b) with these criteria: Given 2 arrays of ints, a and b, return True if they have the same first element or they have the same last element. Both arrays will be length 1 or more.

function common(a,b){
    if (a[0]===b[0] || a[a.length-1]===b[b.length-1]){
        return console.log("True");
    } else {
        return console.log("False");
    }
}

common([1, 2, 3], [7, 3]);
common([1, 2, 3], [7, 3, 2]);
common([1, 2, 3], [1, 3]);

//Challenge 8 - Object Keys and Values
// Create an object with two key-value pairs.

// Log that object to the console.

// Delete the first key-value pair in the object.

// Log that object to the console again. The first key-value pair should be gone.

let Kevin = {
    gender: "male",
    eyeColor: "brown"
};

console.log(Kevin);

delete Kevin.gender;

console.log(Kevin);

//Challenge 9 - Mutating Objects
//Create an array of objects with at least 2 key value pairs. The objects should all have the same keys, and the array should contain at least 3 objects.

// Create a function that accepts the array of objects as an argument.

// Print the value of the second key in each object to the console. Use dot-notation to access the values.

// After printing the values in step 3, change the values of the second key in every object to something new.

// Prove the change worked by printing the second key in each object to the console, which should show the new value. Use bracket-notation to access the values this time.

let employees = [
    {key:"Ben", gender:"male", age: 23},
    {key:"Mary", gender:"female", age:35},
    {key:"Watitti", gender:"male", age:100}
];

function newHires(array){
    for(var i = 0; i < array.length; i++)
    {
        console.log(array[i].gender);
    }
    //return array.gender === "male";
}

newHires(employees);

