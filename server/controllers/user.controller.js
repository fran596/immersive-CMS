const User = require('../models/User')
const mongoose = require('mongoose');



  
  
  //POST route for updating data
  function authUser (req, res, next) {  
    if (req.body.username && req.body.password) {
      User.authenticate(req.body.username, req.body.password, function (error, user) {
        if (error || !user) {
          var err = new Error('Wrong email or password.');
          err.status = 401;
          return next(err);
        } else {
          //req.session.userId = user._id;
          console.log(req.session)
          console.log(req.sessionID)
          //req.session.userId = user._id;
          return res.json(req.sessionID);
        }
      });
    } else {
      var err = new Error('All fields required.');
      err.status = 400;
      return next(err);
    }
  }
  
  // GET route after registering
function checkAuth (req, res, next) {
    if(req.sessionID === req.body.session){
        res.status(200);
        res.send(true)
    }
    else{
        res.status(400);
        res.send(false)
    }
  };
  
  // GET for logout logout
function logout (req, res, next) {
    if (req.session) {
      // delete session object
      req.session.destroy(function (err) {
        if (err) {
          return next(err);
        } else {
          return res.json('true');
        }
      });
    }
  };
  
  module.exports = {
    authUser,
    checkAuth,
    logout
  }