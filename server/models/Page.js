const mongoose = require('mongoose')
const timestamps = require('mongoose-timestamp')

const pageSchema = mongoose.Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
  sections: []
})

pageSchema.plugin(timestamps)
const Page = mongoose.model("page", pageSchema)
module.exports = Page
