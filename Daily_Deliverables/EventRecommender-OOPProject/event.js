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
    this.userEvents = [];
    }
}

class EventRecommender {
    constructor(events,users) {
    // All main properties should go here.
    
    this.events = [];
    this.users = [];
    
    }

    addEvent() {
    // Adds a new Event to the System
       let newEvent = new Event(eventName,eventType,eventDate,eventPrice);
       this.events.push(newEvent);
    }

    addUser() {
    // Adds a new User to the System
       let newUser = new User(userName,userInterests);
       this.events.push(newUser);
    }

    saveUserEvent(){
    //Allow users to save events to a personal Events array.
    }

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