//require packages
const {Client} = require("pg");
const pgKey = require('./keys').dbPassword;

 //create PostgreSQL connection
const connection = new Client({
  host: "localhost",
  port: 5432,
  user: "tpl619_2",
  password: pgKey,
  database: "eventonica"
});

// connection.connect()
module.exports = connection;