const eventfulKey = require("./keys.js").eventful;
const eventful = require('eventful-node');
const client = new eventful.Client(eventfulKey);

 //sample search, try running it to see it in action
client.searchEvents({
  keywords: 'tango',
  location: 'San Francisco',
  date: "Next Week"
}, function(err, data){
   if(err){
     return console.error(err);
   }
   let eventResult = data.search.events.event;
   console.log('Received ' + data.search.total_items + ' events');
   console.log('Event listings: ');
   for ( let i =0 ; i < eventResult.length; i++){
     console.log("===========================================================")
     console.log('title: ',eventResult[i].title);
     console.log('start_time: ',eventResult[i].start_time);
     console.log('venue_name: ',eventResult[i].venue_name);
     console.log('venue_address: ',eventResult[i].venue_address);
   }
});

 //export a custom function that searches via Eventful API, displays the results AND stores some of the data into MySQL
module.exports = function(optionsObj){
  // YOUR WORK HERE
  console.log("You need to create this functionality yourself")
}