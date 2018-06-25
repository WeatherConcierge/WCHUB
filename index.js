// Define models 
require('./models/User')

// Executables 
require('./services/passport')

const express = require('express')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const passport = require('passport')
const keys = require('./config/key')
const path = require('path')

mongoose.connect(keys.mongoURI)

const app = express()
app.use(express.static(path.join(__dirname + '/client/build')))

// Setting Uo cookie session
app.use( cookieSession({
    maxAge: 30 * 24* 60 * 60 * 1000,
    keys:[keys.cookieKey]

}))

app.use(passport.initialize())
app.use(passport.session())

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html')) 
});
require('./routes/authRoutes')(app)


const PORT = process.env.PORT || 5000



app.listen(PORT)

