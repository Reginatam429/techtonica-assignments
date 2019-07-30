// Independent Practice Activity: Basic Calculator
// Refer back to the calculator activity from the JavaScript 1 lesson. Refactor your code to replace your if/else statement(s) with switch statement(s).

// function calculate(num1,mathOp,num2){
// let answer;
// if(mathOp === "+"){
//   answer = num1+num2;
// } else if (mathOp === "-"){
//   answer = num1-num2;
// } else if (mathOp === "*"){
//   answer = num1*num2;
// } else if (mathOp === "/"){
//   answer = num1/num2;
// } else if (mathOp === "%"){
//   answer = num1%num2;
// } else if (mathOp === "^"){
//   answer = Math.pow(num1, num2);
// } else if (mathOp === "SqR"){
//   answer = Math.sqrt(num1)
// } else if (num1 === "pi"){
//   answer = 3.141592653589793;
// }
// return console.log(answer);
// }
// calculate(3,"^",10);
// calculate(25,"SqR");
// calculate("pi");


function calculate(num1,mathOp,num2){
    let answer;
    
    switch (mathOp){
      case "+":
        answer = num1+num2;
        break;
      case "-":
        answer = num1-num2;
        break;
      case "*":
        answer = num1*num2;
        break;
      case "/":
        answer = num1/num2;
        break;
      case "%":
        answer = num1%num2; 
        break; 
      case "^":
        answer = Math.pow(num1, num2); 
        break;
      case "SqR":
        answer = Math.sqrt(num1); 
        break;
      default:
        answer = "This is not computable."
    }
    return console.log(answer);
    }
    
    calculate(3,"^",10);
    calculate(25,"SqR");
    calculate(10,"hi",5);

    //Challenges

    function movieNight(array){
        switch(true){
          case array.includes("D"):
            return ["D","A","B"];
            break;
          default:
            return ["P","A","M"];
            break;
            }
      }
        
      console.log(movieNight(['P', 'D', 'A']));
      console.log(movieNight(['P', 'D', 'M']));
      console.log(movieNight(['P', 'B', 'A']));
      console.log(movieNight(['P', 'B', 'M']));
      console.log(movieNight(['B', 'A', 'M']));
      console.log(movieNight(['D', 'B', 'A']));
      console.log(movieNight(['D', 'A', 'M']));
      console.log(movieNight(['A', 'M', 'P']));
      console.log(movieNight(['D', 'B', 'M']));
      console.log(movieNight(['P', 'D', 'B']));

      //Checking for Understanding:

      function checkVowel(letter){
        switch(letter)
        {
          case "a":
          case "e":
          case "i":
          case "o":
          case "u":
            console.log("This is a vowel");
            break;
          default:
            console.log("This is a consonant");
            break;
        }
      }
      
      checkVowel("i");
      checkVowel("j");

//Code Challeges with Switches and functions:
//       You are given a variable, . Your task is to print: 

// - ONE, if num is equal to 1. 
// - TWO, if num  is equal to 2. 
// - THREE, if num is equal to 3.
// - FOUR, if num is equal to 4.
// - FIVE, if num is equal to 5.
// - SIX, if num is equal to 6.
// - SEVEN, if num is equal to 7.
// - EIGHT, if num  is equal to 8.
// - NINE, if num is equal to 9.
// - PLEASE TRY AGAIN, if num is none of the above.
switch(num){
    case 1:
        console.log("ONE");
        break;
    case 2:
        console.log("TWO");
        break;
    case 3:
        console.log("THREE");
        break;
    case 4:
        console.log("FOUR");
        break;
    case 5:
        console.log("FIVE");
        break;
    case 6:
        console.log("SIX");
        break;
    case 7:
        console.log("SEVEN");
        break;
    case 8:
        console.log("EIGHT");
        break;
    case 9:
        console.log("NINE");
        break;
    default:
        console.log("PLEASE TRY AGAIN");
        break;
}

//Conditional Statements: Switch


    