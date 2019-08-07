const mysteryFunction0 = function(array) {
    const myFavoriteNum = 7;
    for (i = 0; i < array.length; i++) {
      if (array[i] === myFavoriteNum) {
        return true;
      }
    }
    return false;
  }
  const execTime = (arg, functionName)  => {
    console.time('execution time: ');
    functionName(arg);
    console.timeEnd('execution time: ');
    return functionName(arg);
} 
console.log(execTime([1,2,3,4,5],mysteryFunction0));
console.log(mysteryFunction0([1,2,3,4,5])); 

//mysteryFunction0  - looping through an array for a specific number
//will execute multiple times through the array until the number is found or not.
//runtime is 0(n)

//mysteryFunction1 - looking for a specific index in a array. executes only once.
//runtime is 0(1)

//mysteryFunction2 - will always be running on double loop only since factorfound will always return true.
//runtime is on(n^2)

//mysteryFunction3 - only executes through loops to check for even or odd array.length.
//runtime is constant: 0(n)

//mysteryFunction 4 - is O(n) loop through to find the number of eeeeees

//mysteryFunction 5 - will sort the array
//not possible to know for sure without more knowledge of implementation bcause it depends on browser
//O(n log n)

//mysteryFunction 6 - constant - returning a value in a key
//O(1)

//mysteryFunction 7 - O(log N) Binary search

//mysteryFunction 8 - O(1) looks for just the key and value.






//EXCERCISE 2:
/*
Compare the following pieces of code that have the same functionality.
For each function:
- How does it work?
- What is the runtime complexity of the function?
Which solution would be fastest for large input sizes?
*/


// The following 4 functions all look for duplicated elements in an array.
// For example, if the input is [5,2,4,5,4], the function should return [5,4] 
// because those elements are in the array twice.

const findDuplicatesA = (array) => {
    const duplicated = [];
    for (let i = 0; i < array.length; i++) {
      for (let j = i+1; j < array.length; j++) {
        if (array[i] === array[j]) {
          duplicated.push(array[j]);
        }
      }
    }
    return duplicated;
  }
  //findDuplicatesA is 

  const findDuplicatesB = (array) => {
    const seen = new Set();
    const duplicates = new Set();
    for (let i = 0; i < array.length; i++) {
      const value = array[i];
      if (seen.has(value)) {
        duplicates.add(value);
      }
      seen.add(value);
    }
    return duplicates;
  }
  //findDuplicatesB is hard to tell because they are using methods....

  const findDuplicatesC = (array) => {
    array.sort();
    const duplicates = [];
    for (let i = 0; i < array.length - 1; i++) {
      const item = array[i];
      const nextItem = array[i + 1];
      if (item === nextItem) {
        duplicates.push(item);
      }
    }
    return duplicates;
  }

  //findDuplicatesC is most likely a O(2n log n) ---> O(n log n). because it has sort and a for loop.

  const findDuplicatesD = (array) => {
    const duplicated = [];
    const seen = [];
    for (let search = 0; search < array.length; search++) {
      const item = array[search];
      if (seen.indexOf(item) !== -1) {
        duplicated.push(item);
      }
      seen.push(item);
    }
    return duplicated;
  }
  
  //findDuplicatesD is 
  
  // The following 3 functions all count how many times an item is in an array 
  // and return a dictionary of the counts
  // For example, if the input is [5,2,4,5,4,5], the function should return {5:3, 4:2, 2:1} 
  
  const countOccurencesA = (array) => {
    const counts = {};
    for (let i = 0; i < array.length; i++) {
      const item = array[i];
      if (counts[item] === undefined) {
        let countForI = 0;
        for (let j = 0; j < array.length; j++) {
          if (array[j] === item) {
            countForI++;
          }
        }
        counts[item] = countForI;
      }
    }
    return counts;
  }
  //countOccurancesA is O(N^2) since it has double for loop
  const countOccurencesB = (array) => {
    const counts = {};
    array.sort();
    let previousItem = undefined;
    let itemCount = 0;
    let currentItem;
    for (let i = 0; i < array.length; i++) {
      currentItem = array[i];
      if (currentItem === previousItem) {
        itemCount++;
      } else {
        counts[currentItem] = itemCount;
        previousItem = currentItem;
        itemCount = 1;
      }
    }
    counts[currentItem] = itemCount;
  }
  
  const countOccurencesC = (array) => {
    const counts = {};
    for (let i = 0; i < array.length; i++) {
      const item = array[i];
      if (counts[item] === undefined) {
        counts[item] = 0;
      }
      counts[item] += 1;
    }
    return counts;
  }