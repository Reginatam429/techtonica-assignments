const connection = require('./connection');
const app = require('./app');


connection.connect((err) =>{
  if (err) throw err;

  console.log('Welcome to Eventonica')
  console.log("connected as Administrator");

   app.startQuestion(()=>{ connection.end() });
})


 
 