class Ticket {
    constructor(ticketType, price) {
      this.ticketType = ticketType;
      this.price = price;
    }
  }

class Event {
    constructor(name, description) {
      this.name = name;
      this.description = description;
      this.availableTickets=[];
    }
      //class methods
      addAvailableTickets(ticketType,price) {
        let newTicket = new Ticket(ticketType,price);
        this.availableTickets.push(newTicket);
      }
      //Ticket search method
      searchTickets(minPrice,maxPrice){
        let message = 'Eligible tickets: ';
        let counter = 1;
         for (let i=0; i<this.availableTickets.length; i++){
             if(this.availableTickets[i].price >= minPrice && this.availableTickets[i].price <= maxPrice){
                message += `${counter}. ${this.availableTickets[i].ticketType} `;
                counter++;
             }
         }
         if(counter === 1){
            message = "There are no available tickets";
        }
         return message;
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
console.log(Ticket);

$(document).ready(function() {
    let html = "";
    $.each(event_array, function(_index, item) {
      html+= `<li>${item.name} - ${item.description}- ${item.searchTickets(0, 250)}</li>`;
    });
    // insert final html into #event...
    $("#event").html(html);
  });


  event_obj1.addAvailableTickets("human", 299);
  event_obj1.addAvailableTickets("vampire", 99);

  event_obj2.addAvailableTickets("General Admission", 25);
  event_obj2.addAvailableTickets("Floor Seating", 80);

  event_obj2.addAvailableTickets("Orchestra", 300);
  event_obj2.addAvailableTickets("Mezzanine", 200);
  event_obj2.addAvailableTickets("Balcony", 100);

  event_obj3.addAvailableTickets("General Seating", 125);
  event_obj3.addAvailableTickets("Mosh Pit", 90);

  //step 12:
  event_obj3.searchTickets(0, 250);