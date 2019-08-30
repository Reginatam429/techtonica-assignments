const inquirer = require('inquirer');
//connection available to all
const connection = require('./connection');
const eventful = require('eventful-node');
const client = new eventful.Client('2FKQR3txxbXxMrRp');


 const app = {};

 app.startQuestion = (closeConnectionCallback) => {
  inquirer.prompt({
    type: 'list',
    message: 'What action would you like to do?',
    choices: [
      'Complete a sentence',
      'Create a new user',
      'Find one event of a particular type in San Francisco next week',
      'Mark an existing user to attend an event in database',
      'See all events that a particular user is going to',
      'See all the users that are going to a particular event',
      'Exit'
    ],
    name:'action',
  }).then((res) => {
    const continueCallback = () => app.startQuestion(closeConnectionCallback);

    if (res.action === 'Complete a sentence') app.completeSentence(continueCallback);
    if (res.action === 'Create a new user') app.createNewUser(continueCallback);
    if (res.action === 'Find one event of a particular type in San Francisco next week') app.searchEventful(continueCallback);
    if (res.action === 'Mark an existing user to attend an event in database') app.matchUserWithEvent(continueCallback);
    if (res.action === 'See all events that a particular user is going to') app.seeEventsOfOneUser(continueCallback);
    if (res.action === 'See all the users that are going to a particular event') app.seeUsersOfOneEvent(continueCallback);
    if (res.action === 'Exit') {
      closeConnectionCallback();
      return;
    }
  })
}

 app.completeSentence = (continueCallback) => {
  //YOUR WORK HERE
  function processAnswers(inputs){
    console.log(`And your answers are ${inputs.input1} and ${inputs.input2}!`);
  }
  let inputs = [
    {
      message: "What's your first input?",
      type: "input",
      name: "input1"
  },
    {
      message: "What's your second input?",
      type: "input",
      name: "input2"
  }];
  inquirer.prompt(inputs).then(processAnswers);

  //console.log('Please write code for this function');
  //End of your work
  continueCallback();
}

 app.createNewUser = (continueCallback) => {
  //YOUR WORK HERE
  const questions = [
  {
      message: "What's your first name?",
      type: "input",
      name: "firstName",
      validate: function validatefirstName(name){
        return name !== '';
      }
  },{
      message: "What's your last name?",
      type: "input",
      name: "lastName",
      validate: function validatelastName(name){
        return name !== '';
      }
  },{
    message: "What's your age?",
    type: "input",
    name: "age",
    validate: function validateage(name){
      return name !== '';
    }
},{
  message: "What's your email?",
  type: "input",
  name: "email",
  validate: function validateemail(name){
    return name !== '';
  }
}];

  inquirer.prompt(questions).then(result => {
    // connection.query('SELECT * FROM public.users', (err, res) => {
    //   if (err){
    //     throw err
    //   }
    //   console.log('user: ', res.rows[0]);
    // })

    connection.query('INSERT INTO users (firstname,lastname, age, email) VALUES($1, $2, $3, $4)', [result.firstName, result.lastName, result.age, result.email], (err, res) => {
        if(err) {
          throw err
        }
      console.log('user:', res.rows[0])
    })
  //End of your work
  continueCallback();
  })
 };


 app.searchEventful = (continueCallback) => {
  //YOUR WORK HERE
  inquirer.prompt({
    type: "input",
    name: "keyword",
    message: "What type of event would you like to view next week in San Francisco?"
  })
  .then( answer => {
    const { keyword } = answer;
    client.searchEvents(
      {
        keywords: keyword,
        location: "San Francisco",
        date: "Next Week"
      },
      (err, data) => {
        if (err) {
          return console.error(err);
        }
        eventResult = data.search.events.event[0];
        console.log(
          "This event next week that matches your keyword:"
        );
        console.log("title: ", eventResult.title);
        console.log("start_time: ", eventResult.start_time);
        console.log("venue_name: ", eventResult.venue_name);
        console.log("venue_address: ", eventResult.venue_address);
       inquirer.prompt([
        {
        type: "list",
        name: "yesorno",
        message: "Would you like to save this event?",
        choices: ["yes","no"],
        },
      ]).then( answer => {
        console.log("You picked: ", answer.yesorno);
        if (answer.yesorno === "no"){
          
          app.searchEventful(continueCallback); 
        } else{
          connection.query('INSERT INTO events (title,start_time, venue_name, venue_address) VALUES($1, $2, $3, $4 )', [eventResult.title, eventResult.start_time, eventResult.venue_name, eventResult.venue_address], (err, res) => {
            if(err) {
              throw err
            }
          console.log('event: ', res)
        }) 
        }
      })
      }
    );
  })


  //  console.log('Please write code for this function');
  //End of your work
  continueCallback();
}

 app.matchUserWithEvent = (continueCallback) => {
  //YOUR WORK HERE
  
  inquirer.prompt({
    type: "input",
    name: "userid",
    message: "What is the userID you want to select?"
  }).then( answer => {
   console.log('You have selected user: ', answer.userid);
   connection.query('SELECT * FROM users WHERE userid = $1', [answer.userid], (err, res) => {
    if(err) {
      throw err
    }
    const user = res.rows[0];
  console.log('user: ', user.firstname)

  connection.query('SELECT * FROM events', (err,res) => {
    if(err) {
      throw err
    }
    const events = res.rows;
    inquirer.prompt([
      {
      type: "list",
      name: "title",
      message: "Which event would you like to add?",
      choices: events.map(event => event.title)
      }
    ]).then( answer2 => {
      const event = events.find(event  => answer2.title === event.title)
      connection.query('INSERT INTO savedevents (user_id, user_firstname, user_lastname, event_id, event_title) VALUES ($1, $2, $3, $4, $5)', [user.userid, user.firstname,user.lastname, event.eventid, event.title])

      console.log(`Congrats! ${user.firstname} is attending ${event.title}. woot woot!`)
    }
     
      
      )
  })

  
  });
})


  //End of your work
  continueCallback();
  }

 app.seeEventsOfOneUser = (continueCallback) => {
  //YOUR WORK HERE
  inquirer.prompt({
      type: "input",
      name: "userid",
      message:
        "Which user's id would you like to see events for?:"
    })
    .then(ans => {
      const { userid } = ans;
      connection.query(
        "SELECT title FROM events INNER JOIN savedevents ON events.eventid = savedevents.event_id WHERE savedevents.user_id = $1",
        [userid],
        (error, res) => {
          if (error) {
            throw error;
          }
          return res.rows.map(object => {
            console.log(`**${object.title}**`);
          });
        }
      );
    });
  //End of your work
  continueCallback();
}

 app.seeUsersOfOneEvent = (continueCallback) => {
  //YOUR WORK HERE

   console.log('Please write code for this function');
  //End of your work
  continueCallback();
}

 module.exports = app;