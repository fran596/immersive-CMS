const User = require('../models/User')
const mongoose = require('mongoose');


function setUp(req, res) {
  console.log('estoy aqui')
  let database = req.body.db;
  let port = req.body.port
  let siteName = req.body.site;
  let username = req.body.username;
  let password = req.body.password;

  /*Create DB */
  mongoose.connect(`mongodb://localhost:${port}/${database}`);
  let newUser = new User({
    username: username,
    password: password
  })
  /*Insert user in Users collection */
  newUser.save((err, todos) => {
    if(err){
      res.status(500)
      res.send(`Cannot insert user ${err}`)
    }
    res.status(200);
    res.json(todos)
  })

}


module.exports = {
  setUp
}

