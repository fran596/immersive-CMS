const User = require('../models/User')
const mongoose = require('mongoose');
const Admin = mongoose.mongo.Admin;

function setUp(req, res) {
  let database = req.body.db;
  let port = req.body.port
  let siteName = req.body.site;
  let username = req.body.username;
  let password = req.body.password;

  mongoose.disconnect();

  /*Set enviroment database variable */
  var fs = require('fs');
  fs.writeFile(".env", `DB=mongodb://localhost:${port}/${database}`, function (err) {
    if (err) {
      return console.log(err);
    }

    console.log("The file was saved!");
  });

  /*Create DB */
  mongoose.connect(`mongodb://localhost:${port}/${database}`);
  // console.log(process.env.DB)
  // mongoose.connect(process.env.DB);
  let newUser = new User({
    username: username,
    password: password
  })

  /*Insert user in Users collection */
  newUser.save((err, todos) => {
    if (err) {
      res.status(500)
      res.send(`Cannot insert user ${err}`)
    }
    res.status(200);
    res.json(todos)
  })

}

function searchDB(req, res) {
  
  // mongoose.connect(`mongodb://localhost:27017`);

  new Admin(mongoose.connection.db).listDatabases(function (err, result) {
    if (err) {
      res.status(500)
      res.send(`Cannot find the databases ${err}`)
    }
    res.status(200);
    let dbs = result.databases.map(function (item) {
      return item.name
    })
    res.json(dbs)
  });
}


module.exports = {
  setUp,
  searchDB
}

