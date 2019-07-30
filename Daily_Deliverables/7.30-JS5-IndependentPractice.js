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

    function movieNight(input){
        switch(true){
          case input[0]==="D" || input[1] ==="D"|| input[2] === "D" :
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