// Welcome to the prework assessment!

// Exercise 1. Declare a variable called animal and give it a value of your choice
var animal = "lion";

// Exercise 2. Write a conditional that does the following:
// If the value of animal is "lion", print to the console "I'm scared!"
// If the value of animal is "dog", print to the console "So cute"
// If the value of animal is "frog", print to the console "Ribbit ribbit"
// For any other value, print "Just another animal"

function animalRun(animal){
    var answer;
   if (animal=="lion"){
       answer = "I'm scared!";
   } else if (animal=="dog"){
      answer = "So cute";
   } else if (animal=="frog") {
     answer = "Ribbit ribbit";
   } else {
     answer = "Just another animal";
   }
   return answer;
   }
   
   animalRun("frog");

// Exercise 3. Declare 2 variables called person1Age and person2Age and give them values of your choice.
// Write a conditional that does the following:
// If both ages are less than 18, print "You are both children"
// Otherwise, print "At least one adult here" 
var person1Age = 15;
var person2Age = 23;

if (person1Age<18 && person2Age<18){
    console.log("You are both children");
} else {
    console.log("At least one adult here");
}

// Exercise 4. Write a for loop that prints the integers starting 
// at 20, and counts down to 10. (Include 20 and 10)
for (var i=20; i>=10; i--){
    console.log(i);
}

// Exercise 5. Write a while loop that prints the multiples of 5 from 5 to 50 inclusive 
// (i.e. 5, 10, 15, 20 ...)
for (var i=5; i<=50; i++){
    if (i%5 ==0){
      console.log(i);
    }
  }
// Exercise 6. Declare a variable called 'flavors' that is an array of 3 ice cream flavors
var flavors = ["vanilla","chocolate","strawberry"];

// Exercise 7. Update the second element of the array to be a different value

var flavors = ["vanilla","chocolate","strawberry"]
flavors[1]="pistachio"

console.log(flavors);

// Exercise 8. Add 2 more items to the array

var flavors = ["vanilla","chocolate","strawberry"];
flavors.push("mango","coconut");

console.log(flavors);

// Exercise 9. Write a function called multiply that takes in 3 numbers, and returns
// the product of the 3 numbers multiplied together
function multiply(num1,num2,num3){
    console.log(num1*num2*num3);
}
multiply(1,2,3);
// Exercise 10. Write a function that takes in an integer. The function should print all
// integers from 1 to that number. Next to each one it should print whether 
// it is even or odd. For example, if the number is 4, print:
// 1 odd
// 2 even
// 3 odd
// 4 even
function evenOrOdd (topNum){
    for (var i=1; i<=topNum;i++){
        if (i%2==0){
            console.log(i+". Even");
        } else {
            console.log(i+". Odd");
        }
    }
}

evenOrOdd(10);

// Exercise 11. Make an object called pet that contains 2 properties:
// animal (representing what type of animal the pet is)
// age (representing the age of the pet)

var pet = {animal: "Dog", age:2};

// Exercise 12. Print the pet's age
var pet = {animal: "Dog", age:2};
console.log(pet.age);

// Exercise 13. Update pet's age to be a different value

var pet = {animal: "Dog", age:2};
pet.age= 5
console.log(pet.age);

// Exercise 14. In the comments below, write a sentence explaining what each of the following data types are.
// String is data stored as text.
// Number refers to numerical data like :1 ,2, 23
// Boolean has only two possible values: true or false.
// Array is a variable that allows you to hold more than 1 value at a time.
// Object - Everything in JavaScript except for primitives are objects. They are made up of names, keys, and values. 
// undefined in JavaScript means a variable/data is not assigned a value or declared.

//Exercise 15 Add. a new file to the $PATH environmental variable
export PATH=$PATH:$HOME/Desktop/techtonica-assignments

//Exercise 16. Please explain how the internet works. Your answer should include answers to the following questions: 


How are the devices on the internet physically connected to each other? Devices are physically connected to one another through cables(copper and fiber optics), wires, and routers.
How is information physically transmitted from device to device? Information is sent through binary 0's and 1's. This can be transferred by electricity like your ethernet cable, light through fiber optic cables, and radiowaves which is sent and received through a router that is connected to a cable itself. All devices and computers are connected by these cables and routers.
How does one device find another it’s trying to communicate with? They use the DNS and IP addresses. All addresses are in a format like this: 123.1.2.123 where DNS is used to translate names into these numbers.
What methods do devices on the internet use to communicate? Devices use packets to sent bytes to one another back and forth.

// The following questions are bonus questions! Only work on them once you’ve finished all other questions.


// Bonus 1. Write a function that takes in a string and returns the number of times the 
// character "a" appears in the string.

function findTheAs(message){
    var countA = (message.match(/a/g)||[]).length
    return console.log(countA);
}

findTheAs("Hi is there a bath?");

// Bonus 2. Write a function that takes a string and returns which character appears the 
// most times in the string.
function mostFrequent(message){
    var maxCount = 0;
    var countChara = "";
  
    message.split('').foreach(mostFrequent(message)){
        if (message.split(i).length > maxCount){
            maxCount = message.split(i).length;
            countChara = i;
        }
    }

    return console.log(countChara);
}

mostFrequent("Hi what is the most frequeent character in this sentence?");
