// Independent practice
// Write down an example of when you could use a database (other than the examples given in this lesson)
    //you can use a database to keep track of patient information at a hospital, users on a social media platform, people at a company or school.
// Write down 1-3 things you learned from the video
    //1. Databases are a good way to organize your data that allows you to update and look up data easily.
    //2. Entities
    //3. Attributes
// Write down 3 questions you have about databases
    //1.What programs do we store databases on?
    //2.What language do I use to communicate with databases?
    //3.How do I connect a database with my website?

//Data Modeling Part 1: Single Tables

// Independent Practice
// Exercise 1.
// Imagine you are creating a website to organize your personal recipe collection. You want to be able to:

// See the recipe name and description
// Filter by vegetarian or non-vegetarian recipes
// Sort by date added to your collection
// Filter by which meal of the day the recipe is for
// Track how many times you've made each recipe
// Find out which friend gave you this recipe (if any)
// Make a data model for this app, and answer the following questions:

// What is the entity? 
    //Recipe 
// What are the attributes of the entity?
    // Recipe ID,Name, Description, Vegetarian, Date Added, Meal Type, Times Made,, Recipe Exchange
// What is the primary key of the entity?
    //Recipe ID#
// What are the data types of the attributes?
    //Text,boolean, date 
// Are there other ways you might model this data?
    //We could also turn the meal type attributes into 3: breakfast,lunch and dinner - turn these into boolean data types.
// Exercise 2.
// In your own words, define the following terms:

// Entity - your table, it can represent a person,thing or event for example
// Attribute - columns of your entity, details of each entity
// Data type - each attribute has a certain data type : boolean, integer,float,text(string), varchar(string but with a limit on characters), date/datetime
// Primary key - unique identifier for each row in your database
// Schema -  how you plan out your database on what tables and columns you will use