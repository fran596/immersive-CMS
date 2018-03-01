const User = require('../models/User')
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens




//POST route for updating data
function authUser(req, res, next) {
  if (req.body.username && req.body.password) {
    User.authenticate(req.body.username, req.body.password, function (error, user) {
      if (error || !user) {
        var err = new Error('Wrong email or password.');
        err.status = 401;
        return next(err);
      } else {
        const payload = {
          admin: req.body.username
        };

        var token = jwt.sign(payload, process.env.KEY, {
          expiresIn: '1h' // expires in 24 hours
        });

        User.findOne({ username: req.body.username })
          .exec(function (err, user) {
            user.session = token;

            user.save(function (err, Pages) {
              if (err) {
                res.status(500)
                res.send(`Cannot save User session ${err}`)
              }
            })
          })

       // console.log(token)
        return res.json(token);
      }
    });
  } else {
    var err = new Error('All fields required.');
    err.status = 400;
    return next(err);
  }
}

// GET route after registering
function checkAuth(req, res, next) {

  User.findOne({ session: req.body.session })
    .exec(function (err, user) {
      console.log(user)
      jwt.verify(user.session, process.env.KEY, function (err, decoded) {
        if (err) {
          console.log(err)
          res.status(400);
          res.send(false)
        } else {
          res.status(200);
          res.send(true)
        }
      })
    })

};

// GET for logout logout
function logout(req, res, next) {
  User.findOne({ session: req.body.session })
    .exec(function (err, user) {
      console.log(user)
      user.session = '';
      user.save(function (err, Pages) {
        if (err) {
          res.status(500)
          res.send(`Cannot delete User session ${err}`)
        }
        else {
          res.status(200)
          res.json('true');
        }
      })
    })
};


function getUser(req, res) {
  User.find()
    .exec((err, Users) => {
      if (err) {
        res.status(500)
        res.send(`Ocurrió un error 💩 ${err}`)
      }
      res.status(200)
      res.json(Users[0])
    })
}

module.exports = {
  authUser,
  checkAuth,
  logout,
  getUser
}