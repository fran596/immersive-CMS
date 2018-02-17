require('dotenv').config()
const cors = require('cors')
const bodyParser = require('body-parser');
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')

/*route controllers */
const wizardRoutes = require('./routes/wizard')

// const todosRoutes = require('./routes/todos')
const app = express()

app.use(cors())
app.use(morgan('tiny'))
app.use(bodyParser.json())

app.set('port', process.env.PORT || 8081)


// app.get('/', (req, res) => {
//   res.send('TODO API HOME PAGE 💩')
// })

/*API routes */
app.use('/api/wizard', wizardRoutes)


app.listen(app.get('port'), err => {
  if (err) return console.log(`something bad happened 💩 ${err}`)
  console.log(`server listening on ${app.get('port')}`)
})



