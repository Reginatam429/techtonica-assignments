// module.exports = function(app, db) {  
//     app.post('/notes', (req, res) => {res.send('Hello') });
// };

module.exports = function(app, db) {  app.post('/notes', (req, res) => {    console.log(req.body) });};