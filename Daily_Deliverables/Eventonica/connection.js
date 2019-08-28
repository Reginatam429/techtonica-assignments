//require packages
const {Client} = require("pg");

 //create PostgreSQL connection
const connection = new Client({
  host: "localhost",
  port: 5432,
  user: "tpl619_2",
  password: 'password',
  database: "eventonica"
});

// connection.connect()
module.exports = connection;