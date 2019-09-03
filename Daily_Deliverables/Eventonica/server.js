const express = require('express')
const server = express()
server.listen(35432, ()=>{
    console.log("Server listening!")
});

server.get('/ping', (req,res,next) => {
  res.send ("Hello");
})

server.get('/events/:city', (req,res,next) => {
    res.send (req.params.city);
  })

  server.get('/events/:city/:title', (req,res,next) => {
    let foobar = [];
    foobar.push(req.params.city);
    foobar.push(req.params.title);
    res.send (foobar);
  })


 server.get('/events', (req, res) => {
    connection.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).json(results.rows)
    })
  })