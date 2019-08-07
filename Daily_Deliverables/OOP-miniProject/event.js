class Event {
    constructor(name, description) {
      this.name = name;
      this.description = description;
      this.availableTickets = [];
      Event.addAvailableTickets = function(ticketType,price) {
        return this.availableTickets;
      }
    }
  }

  class Ticket {
    constructor(ticketType, price) {
      this.ticketType = ticketType;
      this.price = price;
      this.availableTickets = [];
      addAvailableTickets : function(ticketType,price) {
        return this.firstName + " " + this.lastName;
      }
    }
  }

const event_obj1 = new Event("KLOS Golden Gala", "An evening with hollywood vampires");

const event_obj2 = new Event("Skillet & Sevendust", "Victorious war tour");
const event_obj3 = new Event("Jenny Lewis", "On the line tour 2019");

const event_array = new Array();

// pushing single object to an array
// event_array.push(event_obj1);
// pushing multiple objects to an array at once
event_array.push(event_obj1, event_obj2, event_obj3);

// in order to check whether the elements are pushed, use console.log
console.log(event_array);

$(document).ready(function() {
    let html = "";
    $.each(event_array, function(index, item) {
      html+= `<li>${item.name} - ${item.description}</li>`;
    });
    // insert final html into #event...
    $("#event").html(html);
  });


  event_obj1.addAvailableTickets("human", 299);
  event_obj1.addAvailableTickets("vampire", 99);