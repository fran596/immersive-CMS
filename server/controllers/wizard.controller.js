const User = require('../models/User')
const mongoose = require('mongoose');
const uuidv1 = require('uuid/v1');
const Admin = mongoose.mongo.Admin;
const bcrypt = require('bcryptjs')

function setUp(req, res) {
  let database = req.body.db;
  let port = req.body.port
  let siteName = req.body.site;
  let username = req.body.username;
  let password = req.body.password;

  mongoose.disconnect();

  /*Set enviroment database variable */
  var fs = require('fs');
  fs.writeFile(".env", `DB=mongodb://localhost:${port}/${database}\nKEY=${uuidv1()}`, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("The file was saved!");
  });

  /*Create DB */
  mongoose.connect(`mongodb://localhost:${port}/${database}`);
 
  let hashPassword = ''

  /*Hash password */
  bcrypt.hash(password, 10, function (err, hash) {
    if (err) {
      console.log(error)
      res.status(400)
      res.json(err)
    }
  let newUser = new User({
    username: username,
    password: hash
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
  })

  

}

function searchDB(req, res) {
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

