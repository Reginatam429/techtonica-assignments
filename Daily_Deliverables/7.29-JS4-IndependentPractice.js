//Activity 1 - Vacation Time!

function printVacations(array){

    for (let i=0; i<array.length;i++){
      for(let j=1;j<array[i].length;j++){
        console.log(`${array[i][0]} wants to go to ${array[i][j]}.`);
      }
    }
    }
    
    printVacations([['Tammy', 'Tahiti'], ['Erin', 'Banff, Alberta, Canada'], ['Janet', 'London']]);

//Activity 2 - Vacation Choices
function printVacations(array){

    for (let i=0; i<array.length;i++){
      for(let j=1;j<array[i].length;j++){
        console.log(`${array[i][0]} wants to go to ${array[i][j].slice(0,-1)}, or ${array[i][j].slice(-1)}.`);
      }
    }
    }
    
    printVacations([ ['Tammy', ['Tahiti', 'Bali', 'Hawaii']], ['Erin', ['Banff, Alberta, Canada', 'Iceland']], ['Janet', ['London', 'Hogwarts']]]);