require('dotenv').config()
const cors = require('cors')
const bodyParser = require('body-parser');
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const session = require('express-session');
const app = express()

/*route controllers */
const wizardRoutes = require('./routes/wizard')
const pagesRoutes = require('./routes/pages')
const userRoutes = require('./routes/users')


app.use(cors())
app.use(morgan('tiny'))
app.use(bodyParser.json())

//use sessions for tracking logins
app.use(session({
  secret: 'work hard',
  resave: true,
  saveUninitialized: false,
  maxAge: 60000 * 15
}));

if (process.env.DB == null){
  //DB not created yet
  mongoose.connect(`mongodb://localhost:27017`);
}
else{
  //DB created
  mongoose.connect(process.env.DB)
}

app.set('port', process.env.PORT || 8081)



/*API routes */
app.use('/api/wizard', wizardRoutes);
app.use('/api/pages', pagesRoutes);
app.use('/api/users', userRoutes);

app.listen(app.get('port'), err => {
  if (err) return console.log(`something bad happened ${err}`)
  console.log(`server listening on ${app.get('port')}`)
})



