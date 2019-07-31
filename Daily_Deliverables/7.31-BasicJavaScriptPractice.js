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
        for(let i=0; i<inputNum;i++){
            numSum = numSum + i;
        }
        return numSum;
    }
  }
  
  console.log(obj.calculateSum(10));

  //Challenge 4: FizzBuzz
  