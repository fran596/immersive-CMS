const mongoose = require('mongoose')

const pageSchema = mongoose.Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
  sections: []
})

const Page = mongoose.model("page", pageSchema)
module.exports = Page
