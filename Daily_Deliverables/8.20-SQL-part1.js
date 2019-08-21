// Independent Practice
// Section 1: Creating tables and basic querying
// Work through the Codecademy SQL Tutorial Section 1 (Manipulation):

// SQLite is a version of SQL that comes installed on mac! Try it out:

// In Terminal, type sqlite3 food.sqlite3 to use SQLite. This command will open sqlite and save your database to a file named food.sqlite3.
// Try adding a table with the command CREATE TABLE food (name TEXT, calories INTEGER);
// See that the table was created by typing .tables to see the list of all existing tables.
// Try adding some data: INSERT INTO food VALUES ("pizza", 500);
// See the data: SELECT * from food;
// Using SQLite, try creating tables and adding, updating, deleting, and querying data yourself!

// Download and install DB Browser for SQLite via its download page. Try opening the database you just created! Browse the data and get a feel for how to move around. One way to view SQL data is through the command line, and another way is through graphical tools like the SQLite Browser.

// Try writing queries for the following using the food table:

// Add a column to the table called meal
// Update "pizza" to have it's meal be "dinner"
// Insert 4 more rows into the food DB. Be sure to include values for all 3 colums -- name, calories, and meal
// Update "pizza" to have a different calories number
// Select only the names of all the foods
// Make up a query of your own using another command you've learned
// Section 2: Queries
// Work through the Codecademy SQL Tutorial Section 2 (Queries)

// In sqlite, try writing queries for the following using the food table. Add some data to the table that meets the criteria below so you'll have something to query for.

// Select all foods that have under 100 calories
// Select the names of all foods that start with the letter "a"
// Select all foods that start with "a" AND have meal equal to "dinner"
// Select all foods where meal is "breakfast", sorted by calorie number
// Make up a query of your own using another command you've learned
// Section 3: Advanced queries
// Now do the Codecademy SQL Tutorial Section 3 (Aggregate functions)

// Try writing queries for the following using the food table:

// Count the number of rows in the food table
// Find the food with the maximum number of calories
// Find the average number of calories for breakfast food
// Make up a query of your own using another command you've learned
