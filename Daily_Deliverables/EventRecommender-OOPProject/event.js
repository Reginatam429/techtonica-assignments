class Event{
    constructor(eventName,eventType,eventDate,eventPrice){
    this.eventName = eventName;
    this.eventType = eventType;
    this.eventDate = eventDate;
    this.eventPrice = eventPrice;
    }
}

class User{
    constructor(userName,userInterests){
        this.userName = userName;
        this.userInterests = userInterests;
        this.userFavoritedEvents = [];
    }
    addFavoriteEvent(chosenEvent){
        this.userFavoritedEvents.push(chosenEvent);
    }
}

class EventRecommender {
    constructor() {
    // All main properties should go here.
    
    this.events = [];
    this.users = [];
    
    }

    addEvent(newEvent) {
    // Adds a new Event to the System
       this.events.push(newEvent);
    }

    addUser(newUser) {
    // Adds a new User to the System
       this.users.push(newUser);
    }

    // saveUserEvent(){
    // //Allow users to save events to a personal Events array.
    // }

    deleteUser(userName) {
    // Deletes a User from the system
    delete User.userName;
    }
   
    deleteEvent() {
    // Deletes the Event from the system
    }

    filter(){
    }
}
//below instantiate class -- creating object of that class
//let my varibable called system be an instance of the class EventRecommender

// When you instantiate an EventRecommender object, you should be able to do the following:
let system = new EventRecommender();
// Users:
// Add a new User to the System
let userYasmine = new User("Yasmine","movies");
let userRegina = new User("Regina","concert");
system.addUser(userYasmine);
system.addUser(userRegina);
console.log(system);
// Allow users to save events to a personal Events array
userRegina.addFavoriteEvent("KCON");
userYasmine.addFavoriteEvent("Harry Potter");
console.log(userRegina);
console.log(userYasmine);
// Delete a User from the System
// Event:
// Add a new Event to the System
// Delete an Event from the System
// Filter:
// Note: You can use two separate filter functions or one if you'd like an extra challenge :)