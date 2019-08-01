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
//O(n log n)

//mysteryFunction 6 - constant - returning a value in a key
//O(1)

//mysteryFunction 7 - O(log N) Binary search

//mysteryFunction 8 - O(1) looks for just the key and value.