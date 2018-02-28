const mongoose = require('mongoose')
const timestamps = require('mongoose-timestamp')
const bcrypt = require('bcryptjs')

const userSchema = mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  session: {type: String}
})


//authenticate input against database
userSchema.statics.authenticate = function (username, password, callback) {
  User.findOne({ username: username })
    .exec(function (err, user) {
      if (err) {
        return callback(err)
      } else if (!user) {
        var err = new Error('Username not found.');
        err.status = 401;
        return callback(err);
      }
      console.log(user.password)
      console.log(password)
      bcrypt.compare(password, user.password, function (err, result) {
        if (result === true) {
          return callback(null, user);
        } else {
          return callback();
        }
      })
    });
}

//hashing a password before saving it to the database
// userSchema.pre('save', function (next) {
//   var user = this;
//   bcrypt.hash(user.password, 10, function (err, hash) {
//     if (err) {
//       return next(err);
//     }
//     user.password = hash;
//     next();
//   })
// });

userSchema.plugin(timestamps)
const User = mongoose.model("user", userSchema)
module.exports = User
