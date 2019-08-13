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
    //1.find the array element with 'userName'
    // this.users = [userYasmine,userRegina]
    //iterate through this.users to match each element.userName == userName.
        //one way to do it with a for loop:
    // for(let k=0; k< this.users.length; k++){
    //     if (this.users[k].userName === userName){
    //         this.users.splice(k,1);
    //     }
    // }

    //this filter method creates a new array with all elements that pass. (NOTE! use 'this.users = ' to put it back in the original array. another way to to do this:
    this.users = this.users.filter(user => user.userName != userName);
    }
    //2. Delete that array element
   
    deleteEvent(eventName) {
    // Deletes the Event from the system
    this.events = this.events.filter(event => event.eventName != eventName);
    }

    eventPricefilter(minPrice,maxPrice){
    //That is the input to the filter?
    //what is the filter's output?
    let message = 'Eligible tickets: ';
    let counter = 1;
    for (let i=0; i<this.events.length; i++){
        if(this.events[i].eventPrice >= minPrice && this.events[i].eventPrice <= maxPrice){
            message += `${counter}. ${this.events[i].eventName} `;
            counter++;
            }
        }
        if(counter === 1){
            message = "There are no available tickets";
          }
        return message;
    }
}
//below instantiate class -- creating object of that class
//let my varibable called system be an instance of the class EventRecommender

// When you instantiate an EventRecommender object, you should be able to do the following:
let system = new EventRecommender();
// Users:
// Add a new User to the System
let userYasmine = new User("Yasmine","Movies");
let userRegina = new User("Regina","Concert");
let userWendy = new User("Wendy","Movies");
system.addUser(userYasmine);
system.addUser(userRegina);
system.addUser(userWendy);

// Delete a User from the System
system.deleteUser("Regina");

// Event:
// Add a new Event to the System
let eventMaroon5 = new Event("Maroon 5","Concert","August 10",50);
let eventSpiderman = new Event("Spiderman","Movies","July 6",15);
let eventOlympics = new Event("Olympics","Sports","October 8",500);
system.addEvent(eventMaroon5);
system.addEvent(eventSpiderman);
system.addEvent(eventOlympics);
// Delete an Event from the System
system.deleteEvent("Olympics");

// Allow users to save events to a personal Events array
userRegina.addFavoriteEvent(eventMaroon5);
userRegina.addFavoriteEvent(eventSpiderman);
userYasmine.addFavoriteEvent(eventSpiderman);
userWendy.addFavoriteEvent(eventOlympics);
console.log(userRegina);
console.log(userYasmine);
console.log(userWendy);
// Filter:
// Note: You can use two separate filter functions or one if you'd like an extra challenge :)
console.log(system.eventPricefilter(10,500));

console.log(system);



//
// function updateSystemEvents() {
//     let html = '';
//     for (let i = 0; i < system.events.length; i++) {
//         html += 
//         `<div class="col">
//             <div class="card" style="width: 18rem;">
//                 <div class="card-body">
//                     <h5 class="card-title">${system.events[i].name}</h5>
//                     <p class="card-text">${system.events[i].description}</p>
//                     <div class="row">
//                         <button class="col" id="${i}save" onclick="saveEventUser(this.id)" type="button" class="btn btn-primary"> Save</button>
//                         <button class="col" id="${i}delete" onclick="deleteEvent(this.id)" type="button" class="btn btn-primary"> Delete</button>
//                     </div>
//                 </div>
//             </div>
//         </div>`;
//     }
//     //document.getElementById('systemEvents').innerHTML = html; 
// }

// function updateUserList() {
//     let html = '';
//     for (let i = 0; i < user.userFavoritedEvents.length; i++) {
//         html += 
//         `<div class="col">
//             <div class="card" style="width: 18rem;">
//                 <div class="card-body">
//                     <h5 class="card-title">${user.userFavoritedEvents[i].eventName}</h5>
//                     <p class="card-text">${user.userFavoritedEvents[i].eventType}</p>
//                     <div class="row">
//                         <button class="col" id="${i}userDelete" onclick="deleteUserEvent(this.id)" type="button" class="btn btn-primary"> Delete</button>
//                     </div>
//                 </div>
//             </div>
//         </div>`;
//     }
//     document.getElementById('userEvents').innerHTML = html;
// }

//     if (localStorage.getItem('name') === null && localStorage.getItem('email') === null) {
//         alert('Welcome to Event Recommender')
//         var name = prompt('What is your name?')
//         localStorage.setItem('name', name)
//         var email = prompt('What is your email?')
//         localStorage.setItem('email', email)
//         alert("Hi " + name.toUpperCase(name))
//         user = new User(name, email);
//         system = new EventRecommender();
//         localStorage.setItem('userEventList', JSON.stringify({'list': user.eventList}));
//         if (localStorage.getItem('system') === null) {
//             localStorage.setItem('system', JSON.stringify({'list': system.events}))
//         } else {
//             system.events = JSON.parse(localStorage.getItem('system')).list
//             updateSystemEvents();
//         }
        
//     } else {
//         console.log("FIrst")
//         user = new User(localStorage.getItem('name'), localStorage.getItem('email'))
//         user.eventList = JSON.parse(localStorage.getItem('userEventList')).list
//         system = new EventRecommender();
//         system.events = JSON.parse(localStorage.getItem('system')).list
//         updateSystemEvents();
//         updateUserList();
//         console.log("I am here")
//     }
//     document.getElementById('userName').innerHTML = user.name;
//     document.getElementById('userEmail').innerHTML = user.email;