const Keys = require('../config/key')
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20')
const mongoose = require('mongoose')


const User = mongoose.model('users')

// Generates an identifying cookie 
passport.serializeUser((user, done) => {
    //Use.id is not profile id but id as
    done(null, user.id)
})


// Get id from cookie
passport.deserializeUser((id, done) => {
    // find a record with this ID
    User.findById(id)
        .then( user => {
            done(null, user)
        })
})

passport.use(new GoogleStrategy({
    clientID: Keys.googleClientID,
    clientSecret: Keys.googleClientSecret,
    callbackURL:"/auth/google/callback",
    proxy: true
}, async (acessToken, refreshToken, profile, done) => {
    //Check to see if this is a previous user. This is ASYNC
    const existingUser = await User.findOne({ googleId: profile.id })

    if(existingUser){
        console.log(existingUser)
        return done(null, existingUser)
    } 
    // Creates a modal instance
    const user = await new User({ googleId: profile.id }).save()
    done(null, user)
    
})

)
