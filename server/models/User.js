const mongoose = require('mongoose')
const timestamps = require('mongoose-timestamp')

const userSchema = mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true }
})

userSchema.plugin(timestamps)
const User = mongoose.model("user", userSchema)
module.exports = User
