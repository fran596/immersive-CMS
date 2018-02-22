require('dotenv').config()
const cors = require('cors')
const bodyParser = require('body-parser');
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')

/*route controllers */
const wizardRoutes = require('./routes/wizard')
const pagesRoutes = require('./routes/pages')

// const todosRoutes = require('./routes/todos')
const app = express()

app.use(cors())
app.use(morgan('tiny'))
app.use(bodyParser.json())

if (process.env.DB == null){
  mongoose.connect(`mongodb://localhost:27017`);
  console.log('esta vacio')
}
else{
  mongoose.connect(process.env.DB)
  console.log('no vacio')
}

app.set('port', process.env.PORT || 8081)



// app.get('/', (req, res) => {
//   res.send('TODO API HOME PAGE 💩')
// })

/*API routes */
app.use('/api/wizard', wizardRoutes);
app.use('/api/pages', pagesRoutes);

app.listen(app.get('port'), err => {
  if (err) return console.log(`something bad happened 💩 ${err}`)
  console.log(`server listening on ${app.get('port')}`)
})



