UNIX commands (to use in UNIX terminal)
=============
https://github.com/Techtonica/curriculum/blob/master/command-line/command-line-interface.md
man --> man -l will give the directories.
ls -aF
ls -altF
cd
cd ..
mkdir
rmdir
rm -ri ---> you can set up the alias to rm -iv so you can get a check in before deletting
rm -rf  (caution: do not alias)
mv -iv
cp -i
pwd
touch
clear
history
date
env
which
top
jobs -l
bg
fg
kill -KILL <pid>  (same as kill -9 <pid>)
look
cat
head
tail
grep  - grep function *.js 
more

!!  repeat the last command
!cat  repeat the last cat command

!$  substitute with the previous command's last argument
    e.g. if previous command was:  cat foobar
    doing tail !$ is like issuing the command:  tail foobar

^   e.g. if previous command was:  head foobar
    doing ^head^tail is like issuing the command:  tail foobar
    e.g. if previous command was:  tail -10 foobar
    doing ^10^5 is like issuing the command:  tail -5 foobar

*  wildcard
   e.g.  ls *.js

DOM
===
Write skeleton HTML and point to an external JavaScript file.

JavaScript
==========
Create a HTML element to display JavaScript function's output.

Write the following functions and display their output on the HTML page:
/* Write a function canIVote() that takes in a number, representing the person’s age, and returns
 * the boolean true if they are 18 years old or older, and the boolean false if they are not.
 */

/* Write a function, agreeOrDisagree(), that takes in two strings, and returns ‘You agree!’
 * if the two strings are the same and ‘You disagree!’ if the two strings are different.
 */

/* Write a function, reportingForDuty(), that has two string parameters, rank and lastName,
 * and returns a string in the following format: ‘rank lastName reporting for duty!’
 */
reportingForDuty('Private', 'Fido');  // Should return 'Private Fido reporting for duty!'

/* Write a function, truthyOrFalsy(), that takes in any value and returns true if that value
 * is truthy and false if that value is falsy.
 */
truthyOrFalsy(0);  // Should print false

/* A person’s number of imaginary friends are always 33% of their total friends.
 * Write a function, numImaginaryFriends(), that takes in the total number of friends a person has
 * and returns the number of imaginary friends they have.
 * Since friends can only come in whole numbers, be sure to round your result before returning it.
 */
numImaginaryFriends(18);  // Should print 6

/* Create a function, tipCalculator(), that has two parameters, a string representing the quality of
 * the service received and a number representing the total cost.
 * Return the tip, as a number, based on the following:
 * ‘bad’ should return a 5% tip
 * ‘ok’ should return a 15% tip
 * ‘good’ should return a 20% tip
 * ‘excellent’ should return a 30% tip
 * all other inputs should default to 18%
 */
tipCalculator('good', 100);  //should return 20

More DOM & JavaScript
=====================
Create a HTML button and when clicked, it will execute the following function:
reverseArray( ['sense.','make', 'all', 'will', 'This'] );
reverseArray() takes in an array as an argument and returns a new array with the elements 
in the reverse order.  Do not use built-in method for this exercise.